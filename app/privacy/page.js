export const metadata = {
  title: "Privacy",
  description:
    "How the Kings Arms Reclamation Group collects, uses and protects the personal information you share on this website.",
};

export default function Privacy() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Privacy</p>
          <h1>Your information, and how we look after it.</h1>
          <p className="lede">What we collect when you register your support, why, and your rights over it.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="prose reveal" style={{ maxWidth: "60ch" }}>
            <p>
              The Kings Arms Reclamation Group is committed to protecting your privacy. This notice
              explains what personal information we collect when you register your support on this
              website, why we collect it, and the rights you have over it.
            </p>

            <h3>Who we are</h3>
            <p>
              We are the Kings Arms Reclamation Group, a community campaign in Stokenchurch,
              Buckinghamshire. We are the &ldquo;data controller&rdquo; for the information you give
              us here. For anything to do with your data, contact us at{" "}
              <a href="mailto:Chris@thekingsarmsreclamation.com">Chris@thekingsarmsreclamation.com</a>.
            </p>

            <h3>What we collect</h3>
            <p>
              When you complete our support form we collect your name, your email address, your
              postcode (optional), and the indicative amount you have said you might consider
              pledging (optional). We also record the date you submitted the form and the consent you
              gave. We only ever collect what you choose to give us.
            </p>

            <h3>Why we collect it</h3>
            <p>
              We use your details to keep you updated about the campaign to reclaim the Kings Arms,
              and to understand the level of support and potential pledges across the community. Our
              lawful basis under UK GDPR is your <strong>consent</strong>, which you give by ticking
              the box on the form. You can withdraw that consent at any time.
            </p>

            <h3>Pledges are not payments</h3>
            <p>
              Any amount you indicate is an expression of interest only. It is not a contract, you
              are not committed to it, and no money is collected through this website.
            </p>

            <h3>Where your information is stored</h3>
            <p>
              Submissions are stored in a spreadsheet within our own Google Workspace account. Google
              acts as our data processor and may process data on servers outside the UK; where it
              does, that is covered by Google&rsquo;s data-protection safeguards. We do not use any
              other third-party form or marketing company.
            </p>

            <h3>Who we share it with</h3>
            <p>
              We do not sell your information, and we do not share it with anyone outside the group,
              other than Google as described above. Your details are seen only by the officers of the
              campaign who need them in order to keep you updated.
            </p>

            <h3>How long we keep it</h3>
            <p>
              We keep your details only while the campaign is active. When the campaign ends, or if
              you ask us to remove you, we will delete your information.
            </p>

            <h3>Cookies and tracking</h3>
            <p>
              This website does not use advertising or tracking cookies, and does not profile
              visitors.
            </p>

            <h3>Your rights</h3>
            <p>
              Under UK data-protection law you can ask us to: give you a copy of the information we
              hold about you; correct it; delete it; stop using it; or transfer it &mdash; and you can
              withdraw your consent at any time. To do any of these, email{" "}
              <a href="mailto:Chris@thekingsarmsreclamation.com">Chris@thekingsarmsreclamation.com</a>{" "}
              and we will respond promptly. If you are unhappy with how we have handled your data, you
              can complain to the Information Commissioner&rsquo;s Office (ICO) at{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
            </p>

            <h3>Changes to this notice</h3>
            <p>
              We may update this notice as the campaign develops. Any changes will be posted on this
              page.
            </p>

            <p style={{ marginTop: "2rem", color: "var(--parchment-dim)", fontSize: "0.9rem" }}>
              Last updated: July 2026.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
