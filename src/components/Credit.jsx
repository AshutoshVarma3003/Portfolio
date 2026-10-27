export default function Credit({ credit, className = '' }) {
  if (!credit) return null;
  return (
    <p className={`credit ${className}`}>
      <a href={credit.href} target="_blank" rel="noopener noreferrer">
        {credit.label}
      </a>
    </p>
  );
}
