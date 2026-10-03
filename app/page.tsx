import { anchorId, Article } from "@/components/Article";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Newsletter } from "@/components/Newsletter";
import {
  aboutClosing,
  certification,
  commitments,
  consultancy,
  crafting,
  hours,
  learners,
  market,
  moments,
  polls,
  statements,
  vision,
} from "@/lib/content";
import { INBOX, WEB, WEB_LABEL, WHATSAPP } from "@/lib/site";

const learnerNav = learners.map((service) => service.title).concat(certification.title);
const institutionNav = [vision.title, consultancy.title, polls.title, market.title];

export default function HomePage() {
  return (
    <main>
      <section className="hero" id="top">
        <img
          src="/images/brand.png"
          alt="EduVista Global Network. Expanding Horizons, Elevating Futures."
          fetchPriority="high"
        />
      </section>

      <section className="welcome wrap">
        <h1>Welcome to EduVista Global Network</h1>
        <p className="lead">
          At EduVista, we don’t just support your goals — we <strong>INSPIRE</strong> transformation,
          guide you through your personal <strong>MAP</strong> to success, and help you{" "}
          <strong>RISE</strong> to your full potential.
        </p>
        <p>
          We&apos;re a global academic and career empowerment hub delivering data-driven,
          integrity-rooted, and innovation-led solutions that ensure every learner thrives.
        </p>
        <div className="actions">
          <a className="btn" href="#learners">
            For learners
          </a>
          <a className="btn ghost" href="#institutions">
            For institutions
          </a>
        </div>
      </section>

      <section id="about" className="panel">
        <div className="wrap">
          <header className="chapter">
            <p className="eyebrow">About</p>
            <h2>About EduVista Global Network</h2>
          </header>
          <div className="cards">
            {statements.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="reading">
            <h2>Crafting futures, cultivating excellence</h2>
            <p>{crafting}</p>
            <p>Our vision of the future is rooted in three powerful commitments:</p>
          </div>
          <div className="commitments">
            {commitments.map((item) => (
              <p className="commitment" key={item.lead}>
                <strong>{item.lead}</strong>
                {item.rest}
              </p>
            ))}
          </div>
          <div className="reading closing-block">
            {aboutClosing.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="learners">
        <div className="wrap">
          <header className="chapter">
            <p className="eyebrow">Learners</p>
            <h2>Core services: talent empowerment and academic excellence</h2>
          </header>
          <nav className="toc" aria-label="Learner services">
            {learnerNav.map((title) => (
              <a key={title} href={`#${anchorId(title)}`}>
                {title}
              </a>
            ))}
          </nav>
          {learners.map((service) => (
            <Article key={service.title} article={service} />
          ))}
          <article className="service" id={anchorId(certification.title)}>
            <p className="eyebrow">{certification.eyebrow}</p>
            <h3>{certification.title}</h3>
            {certification.lede.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>Globally recognized examples:</p>
            <div className="table-wrap">
              <table className="cred">
                <thead>
                  <tr>
                    <th scope="col">Field</th>
                    <th scope="col">Credentials</th>
                  </tr>
                </thead>
                <tbody>
                  {certification.rows.map(([field, credentials]) => (
                    <tr key={field}>
                      <td>{field}</td>
                      <td>{credentials}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </section>

      <section id="institutions" className="panel">
        <div className="wrap">
          <header className="chapter">
            <p className="eyebrow">Institutions</p>
            <h2>Core services: organizational insight and strategic research</h2>
          </header>
          <nav className="toc" aria-label="Institution services">
            {institutionNav.map((title) => (
              <a key={title} href={`#${anchorId(title)}`}>
                {title}
              </a>
            ))}
          </nav>
          <Article article={vision} />
          <Article article={consultancy} />
          <Article article={polls} />
          <Article article={market} />
        </div>
      </section>

      <section id="moments">
        <div className="wrap">
          <header className="chapter">
            <p className="eyebrow">Gallery</p>
            <h2>Explore our vibrant learning moments gallery</h2>
          </header>
          <div className="film">
            {moments.map((moment) => (
              <figure key={moment.title}>
                <img src={moment.src} alt={moment.alt} loading="lazy" decoding="async" />
                <figcaption>{moment.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="panel">
        <div className="wrap">
          <header className="chapter">
            <p className="eyebrow">Contact</p>
            <h2>Contact us</h2>
          </header>
          <div className="enquire" id="enquire">
            <div>
              <h3>Send us an email</h3>
              <EnquiryForm />
            </div>
            <aside className="contact-card">
              <p className="eyebrow">Get in touch</p>
              <p className="org">EduVista Global Network Ltd</p>
              <p>Nairobi, Kenya. Serving clients worldwide.</p>
              <div className="contact-links">
                <a href={`mailto:${INBOX}`}>{INBOX}</a>
                <a href={WEB} rel="noopener noreferrer">
                  {WEB_LABEL}
                </a>
                <a href={WHATSAPP} rel="noopener noreferrer">
                  Message us on WhatsApp
                </a>
              </div>
              <p className="eyebrow hours-label">Office hours</p>
              <p className="zone">East Africa Time</p>
              <dl className="hours">
                {hours.map(([day, time]) => (
                  <div key={day}>
                    <dt>{day}</dt>
                    <dd>{time}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="letter-band" aria-labelledby="letter-title">
        <div className="wrap letter">
          <div>
            <h2 id="letter-title">Join our mailing list</h2>
            <p>Get 10% off your first purchase when you sign up for our newsletter.</p>
          </div>
          <Newsletter />
        </div>
      </section>
    </main>
  );
}
