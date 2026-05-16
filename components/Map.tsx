export default function SimpleMap() {
  return (
    <div
      style={{
        width: '100%',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      }}
    >
      <iframe
        title="Liberty Case Immobiliare"
        src="https://www.google.com/maps?q=Liberty%20Case%20Immobiliare%2C%20Via%20Vittorio%20Alfieri%208%2C%2010043%20Orbassano%20TO&z=16&output=embed"
        width="100%"
        height="400"
        style={{
          border: 0,
          display: 'block',
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}