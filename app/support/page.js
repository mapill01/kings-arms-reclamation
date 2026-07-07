import SupportForm from "../../components/SupportForm";

export const metadata = {
  title: "Support Us",
  description:
    "Register your support for the campaign to reclaim the Kings Arms in Stokenchurch, and tell us if you'd consider pledging funds.",
};

export default function Support() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Support us</p>
          <h1>Add your name to the campaign.</h1>
          <p className="lede">The more of the village that stands behind this, the stronger the case to bring the Kings Arms back.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap support">
          <div className="prose reveal">
            <p>
              Banners are going up around Stokenchurch. A full prospectus &mdash; setting out exactly
              how the reclamation would work and how funds would be used &mdash; is being prepared.
            </p>
            <p>
              For now, add your name so we can keep you updated, and let us know if you&rsquo;d
              consider pledging your support when the time comes.
            </p>
          </div>
          <div className="reveal" style={{ marginTop: "2rem" }}>
            <SupportForm />
          </div>
        </div>
      </section>

      <section className="section section--panel">
        <div className="wrap">
          <span className="eyebrow section-label reveal">What happens next</span>
          <h2 className="reveal">From pledge to reclamation.</h2>
          <div className="cards reveal">
            <div className="card"><h3>Register</h3><p>Add your name and tell us whether you&rsquo;d consider pledging. No commitment yet.</p></div>
            <div className="card"><h3>The prospectus</h3><p>We publish the full plan and how the funds would be used and protected.</p></div>
            <div className="card"><h3>Pledge</h3><p>When the offer opens, those who registered are the first to hear how to take part.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
