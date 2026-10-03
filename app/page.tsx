import { Dots } from "@/components/Dots";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { ServiceExplorer, type ExplorerItem } from "@/components/ServiceExplorer";
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

const learnerItems: ExplorerItem[] = [
  ...learners,
  {
    eyebrow: certification.eyebrow,
    title: certification.title,
    lede: certification.lede,
    rows: certification.rows,
  },
];

const institutionItems: ExplorerItem[] = [vision, consultancy, polls, market];

export default function HomePage() {
  return (
    <main>
      <Dots />
      <Hero />

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
          <div className="story">
            <div className="story-lead">
              <h3>Crafting futures, cultivating excellence</h3>
              <p>{crafting}</p>
            </div>
            <p className="story-kicker">Three commitments</p>
            <ol className="commitments">
              {commitments.map((item, index) => (
                <li className="commitment" key={item.lead}>
                  <span className="commitment-num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.lead}</h3>
                  <p>{item.rest}</p>
                </li>
              ))}
            </ol>
            <div className="story-close">
              {aboutClosing.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="learners">
        <div className="wrap">
          <header className="chapter">
            <p className="eyebrow">Learners</p>
            <h2>Core services: talent empowerment and academic excellence</h2>
            <p className="chapter-note">
              Six services, from first university choice through certification. Open one to see who it
              is for and what it includes.
            </p>
          </header>
          <ServiceExplorer label="Learner services" items={learnerItems} />
        </div>
      </section>

      <section id="institutions" className="panel">
        <div className="wrap">
          <header className="chapter">
            <p className="eyebrow">Institutions</p>
            <h2>Core services: organizational insight and strategic research</h2>
            <p className="chapter-note">
              Four ways institutions use EduVista. Open one to see the evidence, the method, and the
              outcome.
            </p>
          </header>
          <ServiceExplorer label="Institution services" items={institutionItems} />
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
