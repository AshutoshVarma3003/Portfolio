import PageMeta from '../components/PageMeta.jsx';
import { site } from '../data/site.js';
import { asset } from '../lib.js';

export default function Contact() {
  return (
    <>
      <PageMeta title="Contact" description="Contact Ashutosh Varma by email or LinkedIn." />
      <section className="section container split">
        <header>
          <p className="label">Contact</p>
          <h1 className="h1">Get in touch</h1>
        </header>
        <ul className="contact-list">
          <li><span className="label">Email</span><a href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><span className="label">LinkedIn</span><a href={site.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/ashutosh-varma</a></li>
          <li><span className="label">Based in</span><span>{site.location}</span></li>
          <li><span className="label">CV</span><a href={asset(site.cv)} target="_blank" rel="noopener noreferrer">Download PDF</a></li>
        </ul>
      </section>
    </>
  );
}
