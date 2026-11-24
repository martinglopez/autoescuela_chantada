'use client'

export default function CTA() {
  return (
    <section className="cta-section" style={{
      background: 'var(--accent)',
      padding: '5rem 4rem',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
        color: '#fff', letterSpacing: '2px', marginBottom: '1rem'
      }}>
        ¿LISTO PARA CONDUCIR?
      </h2>
      <p style={{
        color: 'rgba(255,255,255,0.85)', fontSize: '1rem',
        lineHeight: 1.7, marginBottom: '2.5rem'
      }}>
        Reserva tu primera clase sin compromiso.<br />
        Te explicamos todo en persona.
      </p>
      <a
        href="https://maps.google.com/?q=Xo%C3%A1n+XXIII+15%2C+27500+Chantada%2C+Lugo"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: '#fff', color: 'var(--accent)',
          padding: '0.9rem 2.5rem', borderRadius: '100px',
          fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
          display: 'inline-block', transition: 'background 0.2s'
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#f0f0f0'}
        onMouseLeave={e => e.currentTarget.style.background = '#fff'}
      >
        Cómo llegar
      </a>
    </section>
  )
}
