"use client";

import { useState } from "react";

/* ────────────────────────────────────────────────────────────────
   EDIT ME — paste your Google Apps Script Web App URL here (ends in
   /exec). Setup steps are in GOOGLE-SHEET-SETUP.md.
   While this still says PASTE_YOUR_URL_HERE, the form shows a
   thank-you message but does NOT save anywhere.
   ──────────────────────────────────────────────────────────────── */
const PLEDGE_ENDPOINT = https://script.google.com/macros/s/AKfycbwKEaz4pSNYsYspIHETCeCWUuDxvA14wLXastnXDmdpBGluZfVJ2IgFctpTW8IAxzql0A/exec;

// Pledge bands. Edit freely — indicative only, no money is taken.
const AMOUNTS = [
  "Not sure yet",
  "Up to £100",
  "£100 – £499",
  "£500 – £999",
  "£1,000 – £4,999",
  "£5,000 or more",
];

export default function SupportForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    if (PLEDGE_ENDPOINT.includes("PASTE_YOUR_URL")) {
      console.warn(
        "[Kings Arms] PLEDGE_ENDPOINT is not set. Paste your Apps Script URL in components/SupportForm.js."
      );
      setTimeout(() => setStatus("success"), 500);
      return;
    }

    try {
      // Apps Script doesn't return CORS headers, so we post in "no-cors"
      // mode: the row is written, but the response is opaque to us.
      await fetch(PLEDGE_ENDPOINT, { method: "POST", mode: "no-cors", body: data });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="thanks" role="status">
        <h3>Thank you &mdash; you&rsquo;re on the list.</h3>
        <p>
          We&rsquo;ll be in touch as the campaign gets going, with the prospectus and details of how
          to pledge. Nothing is owed and no money is taken at this stage.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input className="input" id="name" name="name" type="text" required autoComplete="name" />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input className="input" id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
      </div>

      <div className="field">
        <label htmlFor="postcode">
          Postcode <span className="hint">&mdash; optional</span>
        </label>
        <input className="input" id="postcode" name="postcode" type="text" autoComplete="postal-code" />
      </div>

      <div className="field">
        <label htmlFor="amount">
          If you&rsquo;d consider pledging, roughly how much?{" "}
          <span className="hint">&mdash; indicative only, not a commitment</span>
        </label>
        <select className="input" id="amount" name="amount" defaultValue="">
          <option value="">Prefer not to say</option>
          {AMOUNTS.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>

      <label className="check">
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          I consent to the Kings Arms Reclamation Group holding these details to keep me updated
          about the campaign, as described in the{" "}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">privacy notice</a>.
        </span>
      </label>

      {/* Honeypot: hidden from people, catches most bots. Leave it here. */}
      <input
        type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
      />

      <button className="btn btn-primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Adding\u2026" : "Add my name"}
      </button>

      {status === "error" && (
        <p className="form-error">
          Something went wrong sending that. Please try again, or email{" "}
          <a href="mailto:Chris@thekingsarmsreclamation.com">Chris@thekingsarmsreclamation.com</a>.
        </p>
      )}

      <p className="form-note">
        A pledge is an indication of support, not a payment &mdash; no money is taken now. We&rsquo;ll
        only use your details to update you about the campaign.
      </p>
    </form>
  );
}
