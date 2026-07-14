import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p className="mark">The Kings Arms Reclamation</p>
        <p className="meta">A community campaign &middot; Stokenchurch, Buckinghamshire</p>
        <p className="meta">
          <Link href="/support">Pledge your support</Link>
          {"  \u00b7  "}
          <Link href="/privacy">Privacy notice</Link>
          {"  \u00b7  "}
          <a href="mailto:Chris@thekingsarmsreclamation.com">Chris@thekingsarmsreclamation.com</a>
        </p>
        <p className="fine">
          We&rsquo;ll only use the details you share to keep you updated about the campaign. Court
          material is published for information and may be subject to ongoing proceedings.
        </p>
      </div>
    </footer>
  );
}
