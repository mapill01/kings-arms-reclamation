"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/kings-arms", label: "The Kings Arms" },
  { href: "/about", label: "The Campaign" },
  { href: "/the-case", label: "The Case" },
  { href: "/support", label: "Support Us" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><span>KA</span></span>
          <span className="brand-text">
            <span className="b1">The Kings Arms</span>
            <span className="b2">Reclamation</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
            </li>
          ))}
          <li className="nav-cta">
            <Link className="btn btn-primary" href="/support" onClick={() => setOpen(false)}>
              Pledge
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
