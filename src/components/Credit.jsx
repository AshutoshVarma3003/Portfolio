export default function Credit({ credit, className = '', prefix = '' }) {
  if (!credit) return null;
  return (
    <p className={`credit ${className}`}>
      {prefix}<a href={credit.href} target="_blank" rel="noopener noreferrer">
        {credit.label}
      </a>
    </p>
  );
}
