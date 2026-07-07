import Link from "next/link";

// EDIT ME: the hero photograph. Drop a strong historic exterior shot in
// as /public/images/hero.jpg (a good candidate is the 1900 or 1950s photo).
const HERO_IMAGE = "/images/hero.jpg";

export const metadata = {
  description:
    "The community campaign to reclaim and restore the historic Kings Arms in Stokenchurch, Buckinghamshire.",
};

export default function Home() {
  return (
    <main>
      <section
        className="hero--photo"
        style={{ backgroundImage: `linear-gradient(rgba(15,26,20,0.2), rgba(15,26,20,0.2)), url(${HERO_IMAGE})` }}
      >
        <div className="wrap">
          <p className="eyebrow reveal">Stokenchurch &middot; Buckinghamshire</p>
          <h1 className="reveal">The Kings Arms will stand again.</h1>
          <p className="lede reveal">
            A village inn for generations, lost to fire and caught up in the courts. We are the
            community campaign working to reclaim and restore it.
          </p>
          <div className="cta-row reveal">
            <Link className="btn btn-primary" href="/support">Register your support</Link>
            <Link className="btn btn-ghost" href="/kings-arms">See its history</Link>
          </div>
        </div>
      </section>

      {/* who / what */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow section-label reveal">What this is</span>
          <h2 className="reveal">A landmark worth fighting for.</h2>
          <div className="prose reveal">
            <p>
              The Kings Arms has stood at the heart of Stokenchurch for generations. After fire tore
              through the building its future was thrown into doubt, and it has since become the
              subject of legal proceedings.
            </p>
            <p>
              The Kings Arms Reclamation Group was formed by residents and associates of the village
              who are not willing to let it be lost. <strong>Our aim is simple: to reclaim the
              building and restore it as a place that belongs to the community again.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* aims */}
      <section className="section section--panel">
        <div className="wrap">
          <span className="eyebrow section-label reveal">Our aims</span>
          <h2 className="reveal">What we are setting out to do.</h2>
          <ul className="aims">
            <li className="aim reveal"><h3>Reclaim the building</h3><p>Secure the future of the Kings Arms and the land it stands on for the village.</p></li>
            <li className="aim reveal"><h3>See the case through</h3><p>Support the legal process already underway, and keep Stokenchurch informed at every stage.</p></li>
            <li className="aim reveal"><h3>Restore it for the village</h3><p>Bring the building back into use as a place at the heart of Stokenchurch life.</p></li>
            <li className="aim reveal"><h3>Fund it together</h3><p>Raise the support and the funds to make reclamation possible. A full prospectus is on its way.</p></li>
          </ul>
        </div>
      </section>

      {/* explore */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow section-label reveal">Explore</span>
          <h2 className="reveal">Learn the whole story.</h2>
          <div className="cards reveal">
            <div className="card">
              <h3>The Kings Arms</h3>
              <p>Its history through the years, and the night of the fire.</p>
              <Link href="/kings-arms">See the history &rarr;</Link>
            </div>
            <div className="card">
              <h3>The campaign</h3>
              <p>Our President, our Chairman, and the associates behind the group.</p>
              <Link href="/about">Meet the group &rarr;</Link>
            </div>
            <div className="card">
              <h3>The case</h3>
              <p>The dispute, the court proceedings, and the documents.</p>
              <Link href="/the-case">Read the case &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* support CTA */}
      <section className="section section--panel">
        <div className="wrap support">
          <span className="eyebrow section-label reveal">Register your support</span>
          <h2 className="reveal">Add your name to the campaign.</h2>
          <p className="prose reveal">
            Banners are going up around the village. Add your name so we can keep you updated &mdash;
            and tell us if you&rsquo;d consider pledging your support.
          </p>
          <p className="reveal" style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-primary" href="/support">Register your support</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
