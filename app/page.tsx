import { Dots } from "@/components/Dots";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Hero } from "@/components/Hero";
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

export default function HomePage() {
  return (
    <main>
      <Dots />
      <Hero />
      <section className="stage" id="highlights" aria-label="Highlights">
        <div className="wrap">
          <article className="stage-row">
            <div className="stage-copy">
              <p className="eyebrow">Purpose</p>
              <h2>Crafting futures, cultivating excellence</h2>
              <p>
                Mentorship, research, and global opportunity - excellence as a practice, not a
                destination.
              </p>
              <a className="more" href="#about">
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

      <section id="about">
        <div className="wrap">
          <header className="chapter">
            <p className="eyebrow">About</p>
            <h2>About EduVista Global Network</h2>
          </header>
          <div className="beliefs">
            {statements.map((item) => (
              <article className="belief" key={item.title}>
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

      <section id="institutions">
        <div className="wrap">
          <header className="chapter">
            <p className="eyebrow">Institutions</p>
            <h2>Services for institutions</h2>
            <p className="chapter-note">{vision.lede[0]}</p>
          </header>
          <ServiceCards label="Institution services" items={institutionServices} />
        </div>
      </section>

      <section id="contact">
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
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
