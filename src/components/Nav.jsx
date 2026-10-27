import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { site } from '../data/site.js';

const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/cv', label: 'CV' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand">
          {site.name}
        </Link>
        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="primary-nav" className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav__link">
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
