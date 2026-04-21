import { NextResponse } from "next/server";

/**
 * TODO: Add provider subscription + double opt-in.
 * This handler intentionally does not persist data — it is a stub for integration.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };
    if (!body.email) {
      return NextResponse.json({ ok: false, error: "Email required." }, { status: 400 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
