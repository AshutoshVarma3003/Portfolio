import { Link } from 'react-router-dom';
import { site } from '../data/site.js';
import { asset } from '../lib.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{site.name}</p>
          <p className="muted small">{site.role} · {site.location}</p>
        </div>
        <ul className="footer__links">
          <li><a href={`mailto:${site.email}`}>Email</a></li>
          <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href={asset(site.cv)} target="_blank" rel="noopener noreferrer">CV (PDF)</a></li>
          <li><Link to="/work">Work</Link></li>
        </ul>
        <p className="muted small footer__note">
          Simulation images and video are credited beside each item: courtesy of NCERT (DIKSHA),
          AMMACHI Labs and L&amp;T. The simulations are products of AMMACHI Labs.
        </p>
      </div>
    </footer>
  );
}
