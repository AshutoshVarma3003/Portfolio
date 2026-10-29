export default function AccessCallout({ access }) {
  if (!access) return null;

  if (access.status === 'released') {
    return (
      <aside className="access-callout access-callout--released" aria-label="Simulation Availability">
        <div className="access-callout__top">
          <div className="access-callout__status">
            <span className="status-pill status-pill--released">
              <span className="status-pill__dot" />
              {access.badge}
            </span>
          </div>
          <a
            href={access.url}
            target="_blank"
            rel="noopener noreferrer"
            className="button access-callout__btn"
          >
            <span>{access.actionLabel || `Play on ${access.platform}`}</span>
            <span aria-hidden="true" className="access-callout__arrow">↗</span>
          </a>
        </div>
        <div className="access-callout__guidance">
          <p className="access-callout__note">
            <strong>DIKSHA Account Required:</strong> You will need to log in or register for a free account on the government DIKSHA platform to access and launch the content.
          </p>
          {access.hint && (
            <p className="access-callout__hint">
              <strong>How to access the 3D lab:</strong> {access.hint}
            </p>
          )}
        </div>
      </aside>
    );
  }

  if (access.status === 'onsite') {
    return (
      <aside className="access-callout access-callout--onsite" aria-label="Simulation Availability">
        <div className="access-callout__top">
          <span className="status-pill status-pill--onsite">
            <span className="status-pill__dot" />
            {access.badge}
          </span>
        </div>
        <p className="access-callout__desc">{access.notice}</p>
        {access.links && access.links.length > 0 && (
          <div className="access-callout__ext">
            <span className="label">Project Documentation &amp; Coverage:</span>
            <div className="access-callout__links">
              {access.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link"
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </aside>
    );
  }

  if (access.status === 'upcoming') {
    return (
      <aside className="access-callout access-callout--upcoming" aria-label="Simulation Availability">
        <div className="access-callout__top">
          <span className="status-pill status-pill--upcoming">
            <span className="status-pill__dot" />
            {access.badge}
          </span>
        </div>
        <p className="access-callout__desc">{access.notice}</p>
        {access.platformUrl && (
          <div className="access-callout__ext">
            <span className="label">Platform:</span>
            <div className="access-callout__links">
              <a
                href={access.platformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link"
              >
                Visit {access.platform} Platform <span aria-hidden="true">↗</span>
              </a>
              <span className="muted small">(Public playable release scheduled soon)</span>
            </div>
          </div>
        )}
      </aside>
    );
  }

  return null;
}
