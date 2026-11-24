'use client'
import { useEffect, useRef } from 'react'

const pasos = [
  { num: '01', title: 'Reserva tu primera clase', desc: 'Sin compromiso. Ven a conocernos o llámanos y te explicamos todo en persona.' },
  { num: '02', title: 'Prepara la teoría online', desc: 'Acceso inmediato a nuestro campus virtual con temario completo y tests adaptativos.' },
  { num: '03', title: 'Prácticas con instructor', desc: 'Clases con horario que tú eliges. Vehículo manual con doble mando.' },
  { num: '04', title: 'A examen y a conducir', desc: 'Te acompañamos hasta el día del examen con todo lo que necesitas para llegar preparado.' },
]

export default function Proceso() {
  const stepRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.style.transform = 'translateY(0)'
        } else {
          e.target.style.opacity = '0'
          e.target.style.transform = 'translateY(20px)'
        }
      }),
      { threshold: 0.1 }
    )
    stepRefs.current.forEach(r => r && observer.observe(r))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="proceso" className="proceso" style={{ padding: '7rem 4rem' }}>
      <span style={{
        fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
        color: 'var(--accent)', marginBottom: '1rem', display: 'block'
      }}>
        Sin complicaciones
      </span>
      <h2 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '2px', marginBottom: '1.25rem'
      }}>
        ASÍ DE<br />FÁCIL ES
      </h2>
      <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '3rem', maxWidth: 560 }}>
        En Autoescuela Chantada lo hemos simplificado todo para que solo tengas que centrarte en aprender.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {pasos.map((p, i) => (
          <div
            key={p.num}
            ref={el => stepRefs.current[i] = el}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: '2rem',
              opacity: 0, transform: 'translateY(20px)',
              transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              cursor: 'default'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface2)'; e.currentTarget.style.borderColor = 'rgba(230,57,70,0.25)'; e.currentTarget.querySelector('.step-num').style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)';  e.currentTarget.style.borderColor = 'var(--border)';           e.currentTarget.querySelector('.step-num').style.color = 'rgba(230,57,70,0.18)' }}
          >
            <div className="step-num" style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '3.5rem', color: 'rgba(230,57,70,0.18)',
              lineHeight: 1, marginBottom: '1.25rem',
              transition: 'color 0.25s'
            }}>{p.num}</div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem'
            }}>{p.title}</div>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
