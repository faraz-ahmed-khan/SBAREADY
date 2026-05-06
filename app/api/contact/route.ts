import { NextResponse } from "next/server";
import { submitNetworkContactToZoho } from "@/lib/zoho";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields: name, email, message." },
        { status: 400 }
      );
    }

    await submitNetworkContactToZoho({ name, email, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to submit contact.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
