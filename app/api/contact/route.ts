import { NextResponse } from "next/server";

/**
 * TODO: Connect to transactional email provider (SendGrid, SES, etc.).
 * This handler intentionally does not persist data — it is a stub for integration.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
      // reCAPTCHA: verify server-side token when integrated
    };
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ ok: false, error: "Missing fields." }, { status: 400 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
