import { NextResponse } from "next/server"

const DEFAULT_WEBHOOK_URL = "https://n8n.artnutchapol.me/webhook/portfolio-chat"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const question = body?.question
    const sessionId = body?.sessionId
    const history = Array.isArray(body?.history) ? body.history : []

    if (!question || typeof question !== "string") {
      return NextResponse.json({ success: false, error: "Missing question" }, { status: 400 })
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL || process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || DEFAULT_WEBHOOK_URL
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
        sessionId,
        history,
      }),
    })

    const text = await response.text()
    let data: unknown = text

    try {
      data = text ? JSON.parse(text) : {}
    } catch {
      data = { response: text }
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: (data as { error?: string })?.error || "Failed to reach AI service",
          status: response.status,
        },
        { status: 502 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unexpected error",
      },
      { status: 500 }
    )
  }
}
