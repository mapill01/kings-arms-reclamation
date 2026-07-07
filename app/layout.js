import localFont from "next/font/local";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ScrollReveal from "../components/ScrollReveal";

// Fonts are self-hosted (in app/fonts) so nothing is fetched from
// Google at build time or by visitors' browsers.

// Display face: Caslon — an English typeface, fitting for a historic English inn.
const display = localFont({
  src: [{ path: "./fonts/libre-caslon-display-400.woff2", weight: "400", style: "normal" }],
  variable: "--font-display",
  display: "swap",
});

// Body face: Mulish — a clean, highly readable humanist sans.
const body = localFont({
  src: [
    { path: "./fonts/mulish-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/mulish-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

// ─────────────────────────────────────────────────────────────
// EDIT ME: update the URL once the domain is live, and drop an
// og-image.jpg into /public so link shares (WhatsApp/Facebook)
// show a picture. 1200×630px works well.
// ─────────────────────────────────────────────────────────────
const SITE_URL = "https://www.thekingsarmsreclamation.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Kings Arms Reclamation — Stokenchurch",
    template: "%s — The Kings Arms Reclamation",
  },
  description:
    "The community campaign to reclaim and restore the historic Kings Arms in Stokenchurch, Buckinghamshire. Add your name and register your support.",
  openGraph: {
    title: "The Kings Arms Reclamation — Stokenchurch",
    description:
      "The community campaign to reclaim and restore the historic Kings Arms in Stokenchurch. Add your name and register your support.",
    url: SITE_URL,
    siteName: "The Kings Arms Reclamation",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Kings Arms Reclamation — Stokenchurch",
    description:
      "The community campaign to reclaim and restore the historic Kings Arms in Stokenchurch.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <ScrollReveal />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
