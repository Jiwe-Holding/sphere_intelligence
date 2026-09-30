import { useEffect, useState } from 'react'
import {
  ArrowRight, Plus, Quote, Send, Mail, Phone, MapPin, CheckCircle2, Circle,
  Eye, BarChart3, Megaphone, Award, Smile, Package, Radar, GraduationCap,
  Users, MessagesSquare, MessageCircle, Store, ScanEye,
} from 'lucide-react'
import { useInView, useCountUp } from './hooks.js'
import {
  stats, services, methods, countries, values, missions, process, testimonials, faq, contact,
} from '../data/content.js'

const ICONS = {
  Eye, BarChart3, Megaphone, Award, Smile, Package, Radar, GraduationCap,
  Users, Phone, MessagesSquare, MessageCircle, Store, ScanEye,
}

const Icon = ({ name, ...p }) => {
  const C = ICONS[name] || Circle
  return <C {...p} />
}

function SectionHead({ eyebrow, title, lead, center = false }) {
  return (
    <div className={`sec-head ${center ? 'sec-head--center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  )
}

export function Hero() {
  const onFind = (e) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    window.dispatchEvent(new CustomEvent('prefill', { detail: { type: d.get('type'), country: d.get('country') } }))
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section id="home" className="hero">
      <div className="container hero__in">
        <div className="hero__copy">
          <span className="kicker"><i /> Research &amp; Consulting · Africa</span>
          <h1>
            Reliable field data to <span className="hl">decide with confidence.</span>
          </h1>
          <p className="hero__lead">
            Market research, face-to-face surveys, CATI and analytics: we turn the voice of the African consumer into actionable insights, to international standards.
          </p>

          <form className="finder" onSubmit={onFind}>
            <label>
              <span>I need</span>
              <select name="type" defaultValue={services[0].title}>
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
              </select>
            </label>
            <label>
              <span>in</span>
              <select name="country" defaultValue={countries[0]}>
                {countries.map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>
            <button className="btn btn--primary" type="submit">Get a proposal <ArrowRight size={18} /></button>
          </form>

          <ul className="hero__trust">
            <li><CheckCircle2 size={16} /> ESOMAR affiliated</li>
            <li><CheckCircle2 size={16} /> Insights Association</li>
            <li><CheckCircle2 size={16} /> 12 countries</li>
          </ul>
        </div>

        <div className="hero__visual">
          <span className="orbit" aria-hidden="true" />
          <figure className="arch">
            <img src="/images/hero-kinshasa.jpg" alt="Boulevard du 30 juin in Kinshasa seen from above" fetchPriority="high" />
          </figure>
          <figure className="disc">
            <img src="/images/market-lagos.jpg" alt="Aerial view of a busy open-air market in Lagos" />
          </figure>
          <div className="chip chip--a"><strong>12</strong><span>African countries</span></div>
          <div className="chip chip--b"><strong>13,500+</strong><span>field team members</span></div>
        </div>
      </div>

      <div className="container logos">
        <span>Trusted by teams at</span>
        <ul>
          <li>GfK</li>
          <li>Transparency International</li>
          <li>Dynata</li>
          <li>ESOMAR</li>
        </ul>
      </div>
    </section>
  )
}

function Stat({ s, active }) {
  const n = useCountUp(s.value, active)
  return (
    <div className="stat">
      <strong>{n.toLocaleString('en-US')}{s.suffix}</strong>
      <span>{s.label}</span>
    </div>
  )
}

export function Stats() {
  const [ref, seen] = useInView()
  return (
    <section className="stats" ref={ref} aria-label="Key figures">
      <div className="container stats__grid">
        {stats.map((s) => <Stat key={s.label} s={s} active={seen} />)}
      </div>
    </section>
  )
}

export function Vision() {
  return (
    <section id="vision" className="section">
      <div className="container split">
        <div>
          <SectionHead
            eyebrow="Vision & Mission"
            title="Become a top 5 admired marketing research company, with technology as a key difference"
            lead="We believe methodological rigor combined with technology produces data that decision-makers can truly rely on."
          />
          <ul className="checks">
            {missions.map((m) => <li key={m}><CheckCircle2 size={20} />{m}</li>)}
          </ul>
        </div>
        <div className="values">
          <p className="values__motto">Togetherness · Teamwork · Tough</p>
          {values.map((v) => (
            <div className="value" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <SectionHead
          center
          eyebrow="Our services"
          title="Complete expertise, from data collection to decision"
          lead="Tailor-made research to understand your customers, your markets and your competitors."
        />
        <div className="grid grid--4">
          {services.map((s) => (
            <article className="card" key={s.title}>
              <span className="card__icon"><Icon name={s.icon} size={24} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href="#contact" className="card__link">Learn more <ArrowRight size={16} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Methods() {
  return (
    <section id="methods" className="section">
      <div className="container">
        <SectionHead
          center
          eyebrow="Methodologies"
          title="Field, phone, qualitative: the right method for every question"
        />
        <div className="grid grid--3">
          {methods.map((m) => (
            <article className="method" key={m.title}>
              <div className="method__top">
                <span className="card__icon card__icon--navy"><Icon name={m.icon} size={22} /></span>
                <span className="tag">{m.tag}</span>
              </div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </article>
          ))}
        </div>

        <div className="process">
          {process.map((p) => (
            <div className="process__step" key={p.n}>
              <span className="process__n">{p.n}</span>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Fieldwork() {
  return (
    <section className="section fieldwork">
      <div className="container fieldwork__in">
        <figure className="fieldwork__img">
          <img src="/images/market-lagos.jpg" alt="Aerial view of an open-air market, the kind of environment our field teams work in" loading="lazy" />
        </figure>
        <div>
          <SectionHead
            eyebrow="On the ground"
            title="Where consumers really are, our teams are there"
            lead="From open-air markets to shopping malls, homes and offices, our supervised field teams collect data where decisions are actually made."
          />
          <ul className="checks">
            <li><CheckCircle2 size={20} />Trained, supervised interviewers in every country</li>
            <li><CheckCircle2 size={20} />Real-time quality control and back-checks</li>
            <li><CheckCircle2 size={20} />Local languages and cultural know-how</li>
          </ul>
          <a href="#contact" className="btn btn--primary" style={{ marginTop: 28 }}>Plan your fieldwork <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  )
}

export function Coverage() {
  return (
    <section className="coverage">
      <div className="container coverage__in">
        <div>
          <span className="eyebrow eyebrow--light">Coverage</span>
          <h2>A footprint across 12 African countries</h2>
          <p>Our local teams know the markets, the languages and the context, which is your guarantee of representative data.</p>
        </div>
        <div className="mosaic">
          <figure><img src="/images/city-nairobi.jpg" alt="Nairobi skyline" loading="lazy" /><figcaption>Nairobi</figcaption></figure>
          <figure><img src="/images/city-kigali.jpg" alt="Office towers in Kigali" loading="lazy" /><figcaption>Kigali</figcaption></figure>
          <figure><img src="/images/city-kinshasa.jpg" alt="View over Kinshasa and the Congo River" loading="lazy" /><figcaption>Kinshasa</figcaption></figure>
        </div>
      </div>
      <div className="container">
        <ul className="chips">
          {countries.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section section--alt">
      <div className="container">
        <SectionHead center eyebrow="Testimonials" title="Trusted by industry leaders" />
        <div className="grid grid--3">
          {testimonials.map((t) => (
            <figure className="quote" key={t.org}>
              <Quote size={28} className="quote__icon" />
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.org}</strong>
                <span>{t.author}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="affil">Affiliations: <strong>ESOMAR</strong> · <strong>Insights Association</strong> · international standards bodies</p>
      </div>
    </section>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section">
      <div className="container container--narrow">
        <SectionHead center eyebrow="FAQ" title="Frequently asked questions" />
        <div className="faq">
          {faq.map((f, i) => (
            <div className={`faq__item ${open === i ? 'is-open' : ''}`} key={f.q}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {f.q}
                <Plus size={20} />
              </button>
              <div className="faq__a"><div><p>{f.a}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)
  const [type, setType] = useState(services[0].title)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const onPrefill = (e) => {
      setType(e.detail.type)
      setMessage(`We are looking for: ${e.detail.type}\nCountry: ${e.detail.country}\n\n`)
    }
    window.addEventListener('prefill', onPrefill)
    return () => window.removeEventListener('prefill', onPrefill)
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const body = `Name: ${d.get('name')}\nOrganization: ${d.get('org')}\n\n${d.get('message')}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Quote request — ' + d.get('type'))}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  return (
    <section id="contact" className="section section--navy">
      <div className="container split">
        <div>
          <SectionHead eyebrow="Contact" title="Let’s talk about your next research project" lead="Describe your needs and we will get back to you with a methodological proposal." />
          <ul className="contact-list">
            <li><MapPin size={20} /><span>{contact.address}</span></li>
            <li><Phone size={20} /><a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a></li>
            <li><Mail size={20} /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
          </ul>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <label>Full name<input name="name" required autoComplete="name" /></label>
          <label>Organization<input name="org" autoComplete="organization" /></label>
          <label>Type of study
            <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
              {services.map((s) => <option key={s.title}>{s.title}</option>)}
              <option>Other</option>
            </select>
          </label>
          <label>Your needs<textarea name="message" rows="4" required value={message} onChange={(e) => setMessage(e.target.value)} /></label>
          <button className="btn btn--accent" type="submit">Send request <Send size={16} /></button>
          {sent && <p className="form__ok">Your email client is opening to finish sending.</p>}
        </form>
      </div>
    </section>
  )
}
