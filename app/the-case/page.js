export const metadata = {
  title: "The Case",
  description:
    "The ownership of the Kings Arms in Stokenchurch and the legal proceedings concerning it, with the public documents relating to the case.",
};

const documents = [
  { href: "/documents/order-for-trial-june-2026.pdf", title: "Order for Trial", meta: "Court order · June 2026 · PDF", tag: "PDF" },
  { href: "/documents/land-registry-title-plan.pdf", title: "Land Registry title plan", meta: "Building & site · BM151257 · PDF", tag: "PDF" },
];

export default function TheCase() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">The legal case</p>
          <h1>Ownership, the fire, and the courts.</h1>
          <p className="lede">A straightforward account of where things stand, and the papers behind it.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow section-label reveal">Where things stand</span>
          <h2 className="reveal">The building&rsquo;s future is in the courts.</h2>
          <div className="prose reveal">
            {/* NOTE: keep this factual and measured. Proceedings are ongoing —
                have the wording checked before publishing. */}
            <p>
              Ownership of the hotel is currently split between the Sood family and Perfect
              Infrastructure Ltd, whose parent company, Perfect Pvt Buildwell Ltd, is based in New
              Delhi. Bobby Dhillon sold the building to the current owners in 2018.
            </p>
            <p>
              Following the devastating fire in October 2021, the hotel has stood partially burned
              and derelict. The owners are in dispute with their insurers, who have declined to settle
              a claim said to run into several million pounds. A court order made in June 2026 set the
              matter down for trial in April 2027.
            </p>
            <p>
              In the meantime, the building can be considered to be under threat of potential
              development or change of use. That is why this campaign exists: to see that the Kings
              Arms is reclaimed and restored for the village rather than lost.
            </p>
          </div>
          <div className="note reveal">
            <p>
              These proceedings are ongoing. The documents below are provided for information only,
              and nothing on this page is intended as legal comment.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--panel">
        <div className="wrap">
          <span className="eyebrow section-label reveal">Documents</span>
          <h2 className="reveal">Court directions &amp; records.</h2>
          <ul className="doc-list reveal">
            {documents.map((d) => (
              <li key={d.href}>
                <a className="doc" href={d.href} target="_blank" rel="noopener noreferrer">
                  <span className="doc-icon">{d.tag}</span>
                  <span className="doc-body">
                    <span className="doc-title">{d.title}</span>
                    <span className="doc-meta">{d.meta}</span>
                  </span>
                  <span className="doc-arrow">&darr;</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="note reveal">
            <p>
              Further court directions and the group&rsquo;s minutes will be added here as the case
              progresses. Publish only what has been cleared for release.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
