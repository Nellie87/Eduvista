import { Dots } from "@/components/Dots";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { ServiceCards } from "@/components/ServiceCards";
import {
  aboutClosing,
  commitments,
  crafting,
  hours,
  statements,
  vision,
} from "@/lib/content";
import { institutionServices, learnerServices } from "@/lib/services";
import { INBOX, WEB, WEB_LABEL, WHATSAPP } from "@/lib/site";

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
                Mentorship, research, and global opportunity - excellence as a practice, not a
                destination.
              </p>
              <a className="more" href="#about-detail">
                Read more
              </a>
            </div>
            <figure className="stage-visual">
              <img
                src="/images/eduvista-about.jpg"
                alt="Curved library shelves filled with books."
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
                alt="A vintage world map marked with pins across the continents."
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
                alt="A university campus building and lawn."
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
            
            {/* <ol className="commitments">
              {commitments.map((item, index) => (
                <li className="commitment" key={item.lead}>
                  <span className="commitment-num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.lead}</h3>
                  <p>{item.rest}</p>
                </li>
              ))}
            </ol> */}
            <blockquote className="story-close">
              <p>“{aboutClosing}”</p>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="learners">
        <div className="wrap">
          <header className="chapter">
            <p className="eyebrow">Learners</p>
            <h2>Services for learners</h2>
            <p className="chapter-note">From first university choice through certification.</p>
          </header>
          <ServiceCards label="Learner services" items={learnerServices} />
        </div>
      </section>

      <section id="institutions" className="panel">
        <div className="wrap">
          <header className="chapter">
            <p className="eyebrow">Institutions</p>
            <h2>Services for institutions</h2>
            <p className="chapter-note">{vision.lede[0]}</p>
          </header>
          <ServiceCards label="Institution services" items={institutionServices} />
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
            <aside className="contact-side">
              <div className="contact-card">
                <p className="eyebrow">Get in touch</p>
                <p className="org">EduVista Global Network Ltd</p>
                <p>Nairobi, Kenya. Serving clients worldwide.</p>
                <div className="contact-links">
                  <a href={`mailto:${INBOX}`}>{INBOX}</a>
                  <a href={WEB} rel="noopener noreferrer">
                    {WEB_LABEL}
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    Message us on WhatsApp
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <p className="eyebrow">Office hours</p>
                <p className="zone">East Africa Time</p>
                <dl className="hours">
                  {hours.map(([day, time]) => (
                    <div key={day}>
                      <dt>{day}</dt>
                      <dd>{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
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
              Academic and career guidance from the first university choice through institutional
              research.
            </p>
            {/* <div className="closer-letter">
              <p className="eyebrow">Mailing list</p>
              <p>Get 10% off your first purchase when you sign up for our newsletter.</p>
              <Newsletter />
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
