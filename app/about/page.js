export const metadata = {
  title: "The Campaign",
  description:
    "The people behind the Kings Arms Reclamation Group — Project Phoenix — our President Sir David Steel, our Chairman Chris Nash, and the associates of the campaign.",
};

const associates = [
  { slug: "andrew-preece", name: "Andrew Preece", role: "Associate" },
  { slug: "bernice-scanlon", name: "Bernice Scanlon", role: "Associate" },
  { slug: "mark-ackford", name: "Rev Mark Ackford", role: "Associate" },
  { slug: "egon-hunt", name: "Egon Hunt", role: "Associate" },
  { slug: "tim-anning", name: "Tim Anning", role: "Associate" },
  { slug: "richard-rivett", name: "Richard Rivett", role: "Associate" },
  { slug: "rob-emmett", name: "Rob Emmett", role: "Associate" },
  { slug: "andrew-nunn", name: "Andrew Nunn", role: "Associate" },
  { slug: "peter-sutcliffe", name: "Peter Sutcliffe", role: "Associate" },
];

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">The campaign &middot; Project Phoenix</p>
          <h1>The people behind the group.</h1>
          <p className="lede">A President, a Chairman, and the associates of Stokenchurch working to reclaim the Kings Arms.</p>
        </div>
      </section>

      {/* President's foreword */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow section-label reveal">Foreword</span>
          <h2 className="reveal">From our President, Sir David Steel.</h2>
          <div className="split">
            <div className="prose reveal">
              {/* EDIT ME: replace with Sir David Steel's foreword when supplied. */}
              <p>
                [Sir David Steel&rsquo;s foreword will appear here. This space is reserved for his
                words in support of the campaign to reclaim the Kings Arms.]
              </p>
            </div>
            <div className="reveal">
              <figure className="feature-person">
                <img src="/images/people/sir-david-steel.jpg" alt="Sir David Steel" loading="lazy" />
                <figcaption>
                  <p className="role">President</p>
                  <p className="name">Sir David Steel</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's introduction */}
      <section className="section section--panel">
        <div className="wrap">
          <span className="eyebrow section-label reveal">Introduction</span>
          <h2 className="reveal">From our Chairman, Chris Nash.</h2>
          <div className="split">
            <div className="prose reveal">
              <p>
                <strong>Project Phoenix.</strong> The aim is to restore an historic village landmark
                and recreate a sustainable hospitality venue and community asset for future
                generations.
              </p>
              <p>
                The Kings Arms Reclamation group consists of twelve experienced business people,
                eleven of whom reside in the parish. All give their time to Project Phoenix
                voluntarily and free of charge. Our aim is to give Stokenchurch its heart back. There
                is no point in sugar-coating the task ahead &mdash; it&rsquo;s not going to be easy or
                straightforward, but I relish the challenge.
              </p>
              <p>
                The group is looking at various possibilities, whether with a partner or partners, a
                community share issue, a combination of both, or whatever. We will look at various
                solutions and act accordingly. It is important to stress that no individual associate
                or officer of the group, nor the group as a whole, will profit from our efforts. This
                is quite simply for the parish of Stokenchurch.
              </p>
              <p>
                Our website is constructed to give you all the information we have to hand; our
                minutes of meetings will be published, and the group is and will continue to be
                totally transparent. We will hold a public meeting in the late summer to keep the
                community of Stokenchurch up to date with progress, to answer any questions, and
                importantly to allow the village voice to be heard loudly.
              </p>
              <p>
                The date will be advertised on the website, and you will also receive an invitation
                via a leaflet through your letterbox. It is vitally important that you, the residents,
                get involved. I look forward to meeting you in person.
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                <strong>Chris Nash</strong><br />Chairman
              </p>
            </div>
            <div className="reveal">
              <figure className="feature-person">
                <img src="/images/people/chris-nash.jpg" alt="Chris Nash" loading="lazy" />
                <figcaption>
                  <p className="role">Chairman</p>
                  <p className="name">Chris Nash</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Associates */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow section-label reveal">Our associates</span>
          <h2 className="reveal">The people of the campaign.</h2>
          <ul className="people reveal">
            {associates.map((p) => (
              <li className="person" key={p.slug}>
                <img src={`/images/people/${p.slug}.jpg`} alt={p.name} loading="lazy" />
                <p className="name">{p.name}</p>
                <p className="role">{p.role}</p>
              </li>
            ))}
          </ul>
          <div className="note reveal">
            <p>All associates give their time voluntarily and free of charge. No one will profit from the campaign &mdash; it is for the parish of Stokenchurch.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
