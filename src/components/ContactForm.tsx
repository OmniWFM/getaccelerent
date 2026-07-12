"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const labelCls = "mb-2 block uppercase text-navy/60";
const labelStyle = { fontSize: "11px", letterSpacing: "0.1em" } as const;
const inputCls =
  "w-full border border-hair bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-gold";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/sai@treasureadvertising.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        }
      );
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-navy p-10 text-paper">
        <p className="font-display" style={{ fontSize: "24px" }}>
          Thank you — we&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelCls} style={labelStyle}>
          Name
        </label>
        <input type="text" name="Name" required className={inputCls} />
      </div>
      <div>
        <label className={labelCls} style={labelStyle}>
          Company
        </label>
        <input type="text" name="Company" className={inputCls} />
      </div>
      <div>
        <label className={labelCls} style={labelStyle}>
          Email
        </label>
        <input type="email" name="Email" required className={inputCls} />
      </div>
      <div>
        <label className={labelCls} style={labelStyle}>
          Market (city / metro)
        </label>
        <input type="text" name="Market" className={inputCls} />
      </div>
      <div>
        <label className={labelCls} style={labelStyle}>
          Message
        </label>
        <textarea name="Message" rows={4} className={inputCls} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-navy px-8 py-4 font-medium uppercase tracking-wide text-paper transition-colors hover:bg-gold hover:text-navy disabled:opacity-60"
        style={{ fontSize: "12px", letterSpacing: "0.1em" }}
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
