"use client";

import { useState } from "react";

/* ────────────────────────────────────────────────────────────────
   EDIT ME — paste your real form endpoint here (e.g. from Formspree,
   https://formspree.io). While this still reads "your-form-id", the
   form shows a thank-you message but does NOT send anywhere.
   ──────────────────────────────────────────────────────────────── */
const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export default function SupportForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    if (FORM_ENDPOINT.includes("your-form-id")) {
      console.warn(
        "[Kings Arms] FORM_ENDPOINT is not set. Add a Formspree endpoint in components/SupportForm.js to collect submissions."
      );
      setTimeout(() => setStatus("success"), 500);
      return;
    }
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="thanks" role="status">
        <h3>Thank you &mdash; you&rsquo;re on the list.</h3>
        <p>We&rsquo;ll be in touch as the campaign gets going, with details of how to pledge.</p>
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
      <label className="check">
        <input type="checkbox" name="would_pledge" value="yes" />
        <span>I&rsquo;d consider pledging funds to help reclaim the Kings Arms.</span>
      </label>
      <button className="btn btn-primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Adding\u2026" : "Add my name"}
      </button>
      {status === "error" && (
        <p className="form-error">
          Something went wrong sending that. Please try again, or email{" "}
          <a href="mailto:Chris@thekingsarmsreclamation.com">Chris@thekingsarmsreclamation.com</a>.
        </p>
      )}
      <p className="form-note">We&rsquo;ll only use your details to update you about the campaign.</p>
    </form>
  );
}
