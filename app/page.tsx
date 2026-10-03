import { anchorId, Article } from "@/components/Article";
import { Dots } from "@/components/Dots";
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
      <Dots />
      <section className="hero" id="top">
        <img
          src="/images/eduvista-hero.jpg"
          alt="A person on a ridge looking over forested hills in morning mist."
          fetchPriority="high"
        />
        <div className="hero-copy">
          <p className="hero-kicker">EduVista Global Network</p>
          <h1>Expanding horizons, elevating futures</h1>
          <a className="btn" href="#about">
            Explore more
          </a>
        </div>
      </section>

      <section className="stage" aria-label="Highlights">
        <div className="wrap">
          <article className="stage-row" id="about">
            <div className="stage-copy">
              <p className="eyebrow">About</p>
              <h2>Crafting futures, cultivating excellence</h2>
              <p>
                At EduVista, the future is not a distant promise — it is an ecosystem we intentionally
                cultivate through mentorship, research, and global opportunity.
              </p>
              <a className="more" href="#about-detail">
                Read more
              </a>
            </div>
            <figure className="stage-visual">
              <img
                src="/images/eduvista-about.jpg"
                alt="Young green shoots rising from dark soil at dawn."
              />
            </figure>
          </article>

          <article className="stage-row flip">
            <div className="stage-copy">
              <p className="eyebrow">Learners</p>
              <h2>Shape the path from first choice to graduation</h2>
              <p>
                Personalized, globally informed guidance from pre-university planning through
                postgraduate excellence, so every learner gains admission and thrives.
              </p>
              <a className="more" href="#learners">
                Read more
              </a>
            </div>
            <figure className="stage-visual">
              <img
                src="/images/eduvista-pathway.jpg"
                alt="A brass compass and a closed notebook on a wooden desk at dusk."
              />
            </figure>
          </article>

          <article className="stage-row">
            <div className="stage-copy">
              <p className="eyebrow">Institutions</p>
              <h2>Lead with evidence, not guesswork</h2>
              <p>
                Research consultancy, polling, and market intelligence that connect decision-makers
                with data and ambition with measurable impact.
              </p>
              <a className="more" href="#institutions">
                Read more
              </a>
            </div>
            <figure className="stage-visual">
              <img
                src="/images/eduvista-institutions.jpg"
                alt="A stone university colonnade and ivy at dusk."
              />
            </figure>
          </article>
        </div>
      </section>

      <section id="about-detail" className="panel">
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

      <section className="closer" aria-labelledby="closer-title">
        <div className="wrap closer-grid">
          <div>
            <h2 id="closer-title">Let’s rise together</h2>
            <a className="btn" href="#contact">
              Let’s go
            </a>
          </div>
          <div>
            <p>
              EduVista is a global academic and career empowerment hub. We inspire transformation,
              map the path, and help every learner rise — from the first university choice to
              institutional insight.
            </p>
            <div className="closer-letter">
              <p className="eyebrow">Mailing list</p>
              <p>Get 10% off your first purchase when you sign up for our newsletter.</p>
              <Newsletter />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
