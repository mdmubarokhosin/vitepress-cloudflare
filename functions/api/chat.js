// Cloudflare Pages Function — Server-side API proxy for Poolside AI
// Keeps API key secure on the server (Cloudflare Environment Variable / Secret)
// Route: POST /api/chat

export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  }

  try {
    const { request, env } = context
    const body = await request.json()

    // Validate required fields
    const { model, messages, max_tokens, temperature } = body
    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Messages array is required' }), {
        status: 400,
        headers: corsHeaders,
      })
    }

    // Get API key from Cloudflare environment variable (secret)
    const apiKey = env.POOLSIDE_API_KEY
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: 'API key not configured. Set POOLSIDE_API_KEY in Cloudflare Pages Environment Variables.',
        }),
        { status: 503, headers: corsHeaders }
      )
    }

    // Forward request to Poolside AI
    const apiResponse = await fetch('https://inference.poolside.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model || 'poolside/laguna-xs-2.1',
        messages,
        max_tokens: max_tokens || 1024,
        temperature: temperature || 0.6,
      }),
    })

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text()
      return new Response(
        JSON.stringify({
          error: `Poolside API returned ${apiResponse.status}: ${errorText}`,
        }),
        { status: apiResponse.status, headers: corsHeaders }
      )
    }

    // Stream the response back
    const responseData = await apiResponse.json()
    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: corsHeaders,
    })
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || 'Internal server error' }),
      { status: 500, headers: corsHeaders }
    )
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  })
}
