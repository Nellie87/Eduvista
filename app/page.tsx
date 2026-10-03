import { Band } from "@/components/Band";
import { Dots } from "@/components/Dots";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Newsletter } from "@/components/Newsletter";
import {
  about,
  aboutClosing,
  certification,
  commitments,
  consultancy,
  hours,
  learners,
  market,
  moments,
  polls,
  vision,
} from "@/lib/content";
import { INBOX, WEB, WEB_LABEL, WHATSAPP } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <Dots />
      <section className="hero" id="top">
        <img
          className="hero-media"
          src="/images/eduvista-hero.jpg"
          alt="A person stands on a ridge above a misty forested valley at dawn."
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Welcome to EduVista Global Network</p>
          <h1>
            It’s a Great Time
            <span>to Start Rising</span>
          </h1>
          <a className="btn" href="#about">
            Learn More
          </a>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <p className="pull">
            At EduVista, we don’t just support your goals — we <em>inspire</em> transformation, guide
            you through your personal <em>map</em> to success, and help you <em>rise</em> to your full
            potential.
          </p>
          <Band service={about} />
          <div className="commitments">
            {commitments.map((item) => (
              <p className="commitment" key={item.lead}>
                <strong>{item.lead}</strong>
                {item.rest}
              </p>
            ))}
          </div>
          <div className="future">
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
            <h2>Talent empowerment and academic excellence</h2>
          </header>
          {learners.map((service, index) => (
            <Band key={service.title} service={service} flip={index % 2 === 0} />
          ))}
          <section className="credentials" aria-labelledby="cred-title">
            <p className="eyebrow">{certification.eyebrow}</p>
            <h2 id="cred-title">{certification.title}</h2>
            {certification.lede.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>Globally recognized examples:</p>
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
          </section>
        </div>
      </section>

      <section id="institutions">
        <div className="wrap">
          <header className="chapter">
            <p className="eyebrow">Institutions</p>
            <h2>Organizational insight and strategic research</h2>
          </header>
          <Band service={vision} />
          <Band service={consultancy} flip />
          <section className="indexed-block" aria-labelledby="polls-title">
            <div>
              <p className="eyebrow">{polls.eyebrow}</p>
              <h2 id="polls-title">{polls.title}</h2>
              {polls.lede.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ol className="indexed">
              {polls.points.map((point, index) => (
                <li key={point.title}>
                  <span className="num">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <Band service={market} />
        </div>
      </section>

      <section id="moments">
        <div className="wrap moments">
          <header className="chapter">
            <p className="eyebrow">Gallery</p>
            <h2>Learning moments</h2>
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

      <section id="contact">
        <div className="wrap">
          <div className="together">
            <div>
              <h2>
                Let’s Rise
                <br />
                Together
              </h2>
              <div className="actions">
                <a className="btn" href="#enquire">
                  Let’s Go
                </a>
                <a className="btn ghost" href={WHATSAPP} rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="together-copy">
              <p>EduVista Global Network Ltd</p>
              <p>Nairobi, Kenya. Serving clients worldwide.</p>
              <div className="contact-links">
                <a href={`mailto:${INBOX}`}>{INBOX}</a>
                <a href={WEB} rel="noopener noreferrer">
                  {WEB_LABEL}
                </a>
                <a href={WHATSAPP} rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="enquire" id="enquire">
            <div>
              <p className="eyebrow">Appointment</p>
              <h2>Appointment request</h2>
              <EnquiryForm />
            </div>
            <aside>
              <p className="eyebrow">Office hours</p>
              <p className="hours-label">East Africa Time</p>
              <dl className="hours">
                {hours.map(([day, time]) => (
                  <div key={day} style={{ display: "contents" }}>
                    <dt>{day}</dt>
                    <dd>{time}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          <section className="letter" aria-labelledby="letter-title">
            <div>
              <p className="eyebrow">Mailing list</p>
              <h2 id="letter-title">Get 10% off your first purchase</h2>
              <p>when you sign up for our newsletter.</p>
            </div>
            <Newsletter />
          </section>
        </div>
      </section>
    </main>
  );
}
