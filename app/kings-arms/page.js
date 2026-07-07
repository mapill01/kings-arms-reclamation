export const metadata = {
  title: "The Kings Arms",
  description:
    "The history of the Kings Arms in Stokenchurch — a coaching inn since at least the 16th century, where King Charles II dined in 1680 — and the 2021 fire that changed its future.",
};

const throughTheYears = [
  { src: "/images/ka-1900.jpg", year: "1900", caption: "The Kings Arms at the turn of the century" },
  { src: "/images/ka-1912.jpg", year: "1912", caption: "The inn and Wycombe Road" },
  { src: "/images/ka-1952.jpg", year: "1952", caption: "Post-war Stokenchurch" },
  { src: "/images/ka-1950s.jpg", year: "1950s", caption: "A village landmark" },
  { src: "/images/ka-1960s.jpg", year: "1960s", caption: "The Kings Arms in the sixties" },
  { src: "/images/ka-1960s-b.jpg", year: "1960s", caption: "Everyday village life" },
  { src: "/images/ka-1981.jpg", year: "1981", caption: "The Kings Arms in 1981" },
  { src: "/images/ka-1995.jpg", year: "1995", caption: "The 1995 refurbishment" },
  { src: "/images/ka-a.jpg", year: "", caption: "The Kings Arms, Stokenchurch" },
];

const fire = [
  { src: "/images/the-fire-1.jpg", caption: "The fire, October 2021" },
  { src: "/images/the-fire-2.jpg", caption: "The building ablaze" },
  { src: "/images/the-fire-3.jpg", caption: "The aftermath" },
  { src: "/images/the-fire-4.jpg", caption: "What remained" },
];

export default function KingsArms() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">The building</p>
          <h1>The Kings Arms, Stokenchurch</h1>
          <p className="lede">A coaching inn since at least the 16th century, and a landmark at the heart of the village for 600 years.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow section-label reveal">Its history</span>
          <h2 className="reveal">Six hundred years at the heart of the village.</h2>
          <div className="prose reveal">
            <p>
              The hotel has existed in various forms since the 16th century and is a landmark in the
              village of Stokenchurch. Though mostly rebuilt in the 20th century, the outer walls of
              the main building and its footprint are still original. It isn&rsquo;t listed, but has
              been approved by Buckinghamshire Council for entry on its Heritage List &mdash; its
              local importance is recognised and must be taken into account in the planning process.
              It stands within the Stokenchurch Village Conservation Area.

            </p>

            <h3>Royalty and the origins of the name</h3>
            <p>
              Human activity has been on this site for over 600 years, including a historic visit by
              King Charles II. The inn was known originally as The George when, on 14 March 1680, the
              King &mdash; on his way to London to attend Parliament &mdash; stayed there. He judged
              it an unsuitable establishment for Queen Catherine, who was accommodated in a tent
              pitched on the Common; though it is reputed, according to the village people, that he
              had no such scruples regarding his mistress Nell Gwyn. The inn was subsequently renamed
              the King&rsquo;s Arms, and a memorial hung in the chamber where the King dined:
            </p>
            <blockquote>
              &ldquo;Our Gracious Sovereign King Charles II was pleased to make this place his dining
              room upon the 14th day of March 1680.&rdquo;
            </blockquote>

            <h3>The Civil War</h3>
            <p>
              Situated between Royalist Oxford and Parliamentarian London, Stokenchurch and its
              coaching inns were commonly used as resting places for troops from both sides. The
              village is mentioned no fewer than twelve times in the journal of Scoutmaster General
              Sir Samuel Luke between 1643 and 1644, and on two occasions skirmishes broke out when
              both sides arrived at the village together. The Kings Arms would have featured
              prominently in all this activity.
            </p>

            <h3>Inquests</h3>
            <p>
              In the 19th century, inquests into unusual deaths were normally held in a prominent
              local public house &mdash; in Stokenchurch, usually the Kings Arms. One held on 5
              February 1851 concerned the body of John White, aged 60. His housekeeper testified that
              he had eaten two large boiled swede-turnips for supper before going to bed at 8pm, and
              was woken after midnight by violent stomach pains. The doctor gave his opinion that
              White&rsquo;s death was caused by eating the turnips, and the jury returned a verdict to
              that effect.
            </p>

            <h3>Auctions</h3>
            <p>
              For over a century the Kings Arms was the venue for many auctions. One of the most
              important took place on 21 May 1788, when the bankrupt estate of Edward Harris was
              divided into 26 lots &mdash; including the Kings Arms itself and extensive property
              across Stokenchurch and Crowell. The inn was described as &ldquo;now in full business,
              with extensive Stabling&hellip; a Kitchen Garden and Pleasure Ground adjoining,&rdquo;
              then let to Thomas Gibbs at £30 per annum.
            </p>

            <h3>The licensees</h3>
            <p>
              Over its near-600-year history the Kings Arms had many proprietors. In the 1750s it was
              Samuel Carter; in 1769 his son-in-law Edward Harris announced he had taken it on. After
              the Second World War the furniture manufacturer Harry Anderson bought the hotel to keep
              his daughter, Gwen Olsen (1918&ndash;2009), occupied &mdash; she had taken to dancing
              with soldiers in London, and he bought it without consulting her. Gwen ran it for many
              years.
            </p>
            <p>
              She sold it to local businessman Eric Hunt &mdash; whose son Egon is a member of this
              group &mdash; and it passed in turn to Pam and Pat Roddy, then in the mid-1990s to Raja
              Munnawar Khan, and later to the Dhillon family, who rebuilt it and renamed it the Kings
              Arms Hotel. Bobby Dhillon sold it to the current owners in 2018.
            </p>
          </div>
          <div className="note reveal">
            <p>The building&rsquo;s current ownership and the legal proceedings are set out on <a href="/the-case">The Case</a>.</p>
          </div>
        </div>
      </section>

      <section className="section section--panel">
        <div className="wrap">
          <span className="eyebrow section-label reveal">Through the years</span>
          <h2 className="reveal">The Kings Arms, across the decades.</h2>
          <div className="gallery reveal">
            {throughTheYears.map((p) => (
              <figure className="figure" key={p.src}>
                <img src={p.src} alt={p.caption} loading="lazy" />
                <figcaption>{p.year && <b>{p.year}. </b>}{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow section-label reveal">The fire</span>
          <h2 className="reveal">8 October 2021.</h2>
          <div className="prose reveal">
            <p>
              The building was largely destroyed by fire on 8 October 2021 &mdash; the blaze made BBC
              News &mdash; and has stood partially burned and derelict since. The hope of this
              campaign is that the shell of the building can be retained and the Kings Arms brought
              back. These photographs record the fire and what was left behind.
            </p>
          </div>
          <div className="gallery gallery--wide reveal" style={{ marginTop: "2rem" }}>
            {fire.map((p) => (
              <figure className="figure" key={p.src}>
                <img src={p.src} alt={p.caption} loading="lazy" />
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--panel">
        <div className="wrap">
          <span className="eyebrow section-label reveal">Maps</span>
          <h2 className="reveal">The Kings Arms in Stokenchurch.</h2>
          <div className="gallery gallery--wide reveal">
            <figure className="figure">
              <img src="/images/1897-map-stokenchurch.jpg" alt="1897 map of Stokenchurch" loading="lazy" />
              <figcaption><b>1897. </b>Ordnance map of Stokenchurch</figcaption>
            </figure>
            <figure className="figure">
              <img src="/images/conservation-area-map.jpg" alt="Stokenchurch conservation area map" loading="lazy" />
              <figcaption>Stokenchurch conservation area &mdash; <a href="/documents/stokenchurch-conservation-area-map.pdf">download the full map (PDF)</a></figcaption>
            </figure>
          </div>
          <div className="note reveal">
            <p>
              The registered title plan for the building and site is available on{" "}
              <a href="/the-case">The Case</a> page, alongside the court documents.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
