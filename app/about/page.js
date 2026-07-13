export const metadata = {
  title: "The Campaign",
  description:
    "The people behind the Kings Arms Reclamation Group — Project Phoenix — our President Sir David Steel KC, our Chairman Chris Nash, and the associates of the campaign.",
};

// The team. Officers first, then associates.
const team = [
  {
    slug: "chris-nash", name: "Chris Nash", role: "Chairman",
    bio: "A retired businessman with a track record of turning ambitious ideas into reality. Chris built a successful foam-industry manufacturing company employing over 60 people and developed his own respected brand of mattresses. A resident of Stokenchurch for more than 50 years, he led the campaign to rebuild the Scout & Guide Headquarters after the 2005 arson attack, helping raise around \u00a3600,000 to open the new building in 2011. He has a reputation for delivering projects others believe impossible.",
  },
  {
    slug: "sir-david-steel", name: "Sir David Steel KC", role: "President",
    bio: "One of the leading voices in the village, consistently calling for action over a building left unsafe for nearly five years. Sir David enjoyed a distinguished legal career: appointed King's Counsel in 1981, and after many years at the Bar he served as a Recorder and Deputy High Court Judge before being appointed a Judge of the High Court in the Queen's Bench Division in 1998, for which he was knighted. He continues to advocate for a safe and lasting resolution for the building.",
  },
  {
    slug: "bernice-scanlon", name: "Bernice Scanlon", role: "Press Officer",
    bio: "A Director of Procurement with over 25 years' experience across multiple industry sectors and disciplines.",
  },
  {
    slug: "andrew-nunn", name: "Andrew Nunn", role: "Treasurer",
    bio: "A retired bank manager from Lloyds Bank plc, very active in village life and Chairman of the Scout & Guide HQ.",
  },
  {
    slug: "andrew-preece", name: "Andrew Preece", role: "Secretary",
    bio: "Managing Director of UK Mats Ltd, a local business, and a parish councillor for nearly ten years. Andrew liaised with the council in the aftermath of the fire and understands the complex leases of the common land surrounding the hotel. He has lived in the village all his life.",
  },
  {
    slug: "richard-rivett", name: "Richard Rivett", role: "Associate", post: "M.I.C.E., M.I.H.T., C.Eng.",
    bio: "A retired chartered civil engineer with an extensive career in local government as a senior executive at Buckinghamshire County Council. A resident for more than 50 years, he has advised the Parish Council and the local authority on highways, drainage and watercourses, and is a highly respected source of guidance on the community's infrastructure.",
  },
  {
    slug: "egon-hunt", name: "Egon Hunt", role: "Associate",
    bio: "A successful businessman, founder and Managing Director of Hunts Office Furniture Ltd in High Wycombe. Egon has lived in Stokenchurch all his life, and his father once owned the Kings Arms \u2014 a close personal connection to the building.",
  },
  {
    slug: "peter-sutcliffe", name: "Peter Sutcliffe", role: "Associate",
    bio: "Owned and managed J Bennett & Son Insurance Brokers for many years before retiring and selling the business. Peter understands how the corporate insurance world works and the legal processes.",
  },
  {
    slug: "tim-anning", name: "Tim Anning", role: "Associate", post: "FNAEA",
    bio: "The village's estate agent, who has lived here all his life. His business sits next to the Kings Arms and was badly affected by the fire; he had to relocate for several years before his office was repaired and safe to return to.",
  },
  {
    slug: "rob-emmett", name: "Rob Emmett", role: "Associate",
    bio: "Though relatively new to the village, Rob has taken a keen interest in the building through his work as a land agent of 25 years, specialising in multi-million-pound properties along the River Thames. He has previously run a project to acquire a local-authority building in disrepair and rebuild it as a public\u2013private initiative.",
  },
  {
    slug: "manu-pillai", name: "Manu Pillai", role: "Associate",
    bio: "A businessman specialising in global IT, who runs Stokenchurch Dental with his wife, a dentist. Manu has contributed to village life in many ways, including running the local Stokenchurch Facebook group of 9,000 members.",
  },
  {
    slug: "mark-ackford", name: "Rev Mark Ackford", role: "Associate",
    bio: "Vicar of Stokenchurch since 2018 and an integral part of the village, bringing energy, compassion and vision to the parish.",
  },
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
          <h2 className="reveal">From our President, Sir David Steel KC.</h2>
          <div className="split">
            <div className="prose reveal">
              <p>
                For the last six hundred years the Kings Arms, previously the George and latterly the
                Kings Hotel, has occupied the site in the hill top village of Stokenchurch. It boasts
                of Royal connections with King Charles the Second and Nell Gwynne, and no doubt holds
                secrets through the centuries. The building has gone through many transitions and
                additions to reach its 21st century pre-fire appearance.
              </p>
              <p>
                My family has lived close to the Oxfordshire/Buckinghamshire border since the Second
                World War, and my wife and I now reside in the parish of Stokenchurch. I am determined
                to encourage steps to create a plan to either rebuild, restore or recreate the Kings
                Arms, retaining its 20th century grandeur.
              </p>
              <p>
                We are approaching the fifth anniversary of the fire which turned the building into an
                eyesore, and took the heart of the village.
              </p>
              <p>
                I very much urge you, and the Stokenchurch community, to actively support Project
                Phoenix and begin to build the future of our village for the next generation.
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                <strong>Sir David Steel KC</strong><br />President
              </p>
            </div>
            <div className="reveal">
              <figure className="feature-person">
                <img src="/images/people/sir-david-steel.jpg" alt="Sir David Steel KC" loading="lazy" />
                <figcaption>
                  <p className="role">President</p>
                  <p className="name">Sir David Steel KC</p>
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
                community up to date, to answer any questions, and importantly to allow the village
                voice to be heard loudly.
              </p>
              <p>
                The date will be advertised on the website, and you will also receive an invitation
                via a leaflet through your letterbox. It is vitally important that you, the residents,
                get involved. I look forward to meeting you in person.
              </p>
              <p style={{ marginTop: "1.5rem" }}><strong>Chris Nash</strong><br />Chairman</p>
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

      {/* The team, with bios */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow section-label reveal">The team</span>
          <h2 className="reveal">Twelve people, one purpose.</h2>
          <div className="team">
            {team.map((p) => (
              <article className="team-card reveal" key={p.slug}>
                <img src={`/images/people/${p.slug}.jpg`} alt={p.name} loading="lazy" />
                <div>
                  <p className="role">{p.role}</p>
                  <h3 className="name">{p.name}{p.post && <span className="post"> &middot; {p.post}</span>}</h3>
                  <p className="bio">{p.bio}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="note reveal">
            <p>All associates give their time voluntarily and free of charge. No one will profit from the campaign &mdash; it is for the parish of Stokenchurch.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
