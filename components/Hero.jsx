'use client'
import CarnetConducir from './CarnetConducir'

export default function Hero() {
  return (
    <section className="hero" style={{
      position: 'relative', minHeight: '100vh',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      alignItems: 'center', gap: '2rem',
      padding: '8rem 4rem 5rem',
      background: 'radial-gradient(ellipse at 75% 50%, #ffc5c9 0%, #ffe4e6 30%, #fff8f8 65%, #ffffff 90%)'
    }}>

      {/* TEXTO IZQUIERDA */}
      <div>
        <h1 className="hero-anim-1 hero-title" style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(4rem, 8vw, 7rem)',
          lineHeight: 0.95, letterSpacing: '2px', marginBottom: '1.5rem'
        }}>
          CONDUCE{' '}<br className="hero-br" /><span style={{ color: '#e63946' }}>TU</span>{' '}<br className="hero-br" />FUTURO
        </h1>

        <p className="hero-anim-2" style={{
          color: '#5a5d6a', fontSize: '1.05rem',
          lineHeight: 1.7, maxWidth: '480px', marginBottom: '2.5rem'
        }}>
          Aprueba a la primera con un método de enseñanza moderno,
          instructores certificados y tecnología que te prepara de verdad.
        </p>

        <div className="hero-btns hero-anim-3" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a
            href="#contacto"
            style={{ background: '#e63946', color: '#fff', padding: '0.8rem 2rem', borderRadius: '100px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#c1121f'}
            onMouseLeave={e => e.currentTarget.style.background = '#e63946'}
          >
            Cómo llegar
          </a>
          <a
            href="#proceso"
            style={{ color: '#5a5d6a', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#e63946'}
            onMouseLeave={e => e.currentTarget.style.color = '#5a5d6a'}
          >
            Cómo funciona →
          </a>
        </div>

        {/* STATS */}
        <div className="hero-stats hero-anim-4" style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem' }}>
          {[
            { num: '2000+', label: 'Alumnos graduados' },
            { num: '21', label: 'Años de experiencia' },
          ].map(s => (
            <div key={s.label}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '2.5rem', color: '#e63946', lineHeight: 1
              }}>{s.num}</div>
              <div style={{ color: '#5a5d6a', fontSize: '0.75rem', marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CARNÉ OFICIAL */}
      <div className="hero-carnet hero-anim-5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1200px' }}>
        <CarnetConducir />
      </div>
    </section>
  )
}
