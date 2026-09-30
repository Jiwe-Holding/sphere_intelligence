import { useEffect, useState } from 'react'
import { Menu, X, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { nav, contact } from '../data/content.js'

export function Logo({ light = false }) {
  return (
    <a href="#home" className={`logo ${light ? 'logo--light' : ''}`} aria-label="Sphere Intelligence — home">
      <svg width="34" height="34" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill={light ? '#fff' : '#0b2545'} />
        <ellipse cx="16" cy="16" rx="14" ry="5.5" fill="none" stroke="#f5a524" strokeWidth="1.8" transform="rotate(-25 16 16)" />
        <circle cx="16" cy="16" r="4" fill="#f5a524" />
      </svg>
      <span>
        <strong>SPHERE</strong> INTELLIGENCE
      </span>
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar__in">
          <span>ESOMAR · Insights Association member</span>
          <span className="topbar__links">
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </span>
        </div>
      </div>
      <div className="container header__in">
        <Logo />
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary nav__cta" onClick={() => setOpen(false)}>
            Request a quote
          </a>
        </nav>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo light />
          <p className="footer__about">
            SPHERE is a holding company focused on marketing research, augmented intelligence, strategic consulting, business training and workshops.
          </p>
        </div>
        <div>
          <h4>Navigate</h4>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li><MapPin size={16} /> {contact.address}</li>
            <li><Phone size={16} /> {contact.phone}</li>
            <li><Mail size={16} /> {contact.email}</li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Sphere Intelligence. All rights reserved.</span>
        <a href="#home">Back to top <ArrowRight size={14} style={{ transform: 'rotate(-90deg)' }} /></a>
      </div>
    </footer>
  )
}
