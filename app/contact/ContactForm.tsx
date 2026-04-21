"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function validate() {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Name is required.";
    if (!email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address.";
    }
    if (!message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");
    if (!validate()) return;
    try {
      /* TODO: Integrate reCAPTCHA v3 token verification server-side. */
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 rounded-3xl border border-warm bg-surface p-8 shadow-sm">
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-xl border border-warm px-4 py-2.5 text-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-gold"
          autoComplete="name"
        />
        {errors.name ? (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.name}
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-navy">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-xl border border-warm px-4 py-2.5 text-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-gold"
          autoComplete="email"
        />
        {errors.email ? (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="mt-2 w-full rounded-xl border border-warm px-4 py-3 text-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-gold"
        />
        {errors.message ? (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>
      <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto">
        Send message
      </Button>
      {status === "success" ? (
        <p className="text-sm text-navy" role="status">
          Thank you—your message has been recorded for follow-up.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-600" role="alert">
          Could not send right now. Please try again shortly.
        </p>
      ) : null}
    </form>
  );
}
