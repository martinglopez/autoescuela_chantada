'use client'
import { useState } from 'react'

const base = { fontFamily: "'Arial Narrow', Arial, sans-serif" }

function Estrellas() {
  const r = 9, cx = 22, cy = 16
  return Array.from({ length: 12 }, (_, i) => {
    const ang = (i * 30 - 90) * (Math.PI / 180)
    const x = cx + r * Math.cos(ang)
    const y = cy + r * Math.sin(ang)
    return (
      <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
        fontSize="5" fill="#FFD700" transform={`rotate(${i * 30}, ${x}, ${y})`}>★</text>
    )
  })
}

function BloqueUE() {
  return (
    <div style={{
      width: 88, height: 32, background: '#003399', flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 6px'
    }}>
      <svg width="44" height="32" style={{ flexShrink: 0 }}>
        <Estrellas />
        <text x="22" y="25" textAnchor="middle" fontSize="11" fontWeight="bold"
          fontStyle="italic" fill="#fff">E</text>
      </svg>
      <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 5.5, lineHeight: 1.3, textAlign: 'right' }}>
        <div style={{ fontWeight: 700, letterSpacing: 0.5 }}>UNIÓN</div>
        <div style={{ fontWeight: 700, letterSpacing: 0.5 }}>EUROPEA</div>
      </div>
    </div>
  )
}

function CabeceraAzul() {
  return (
    <div style={{
      display: 'flex', height: 32, width: '100%',
      background: 'linear-gradient(90deg,#1a3a8c,#1e44a8)',
      flexShrink: 0
    }}>
      <BloqueUE />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 10 }}>
        <div style={{ color: '#fff', fontWeight: 700, fontSize: 10.5, letterSpacing: 0.4 }}>
          PERMISO DE CONDUCCIÓN
        </div>
        <div style={{ color: '#cdd8f5', fontSize: 8, letterSpacing: 0.3 }}>REINO DE ESPAÑA</div>
      </div>
    </div>
  )
}

function TramaSVG() {
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
      <defs>
        <pattern id="trama" width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M 12 0 L 0 0 0 12" fill="none" stroke="#003399" strokeWidth="0.4" opacity="0.12" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#trama)" />
    </svg>
  )
}

function Campo({ num, label, style }) {
  return (
    <div style={{ marginBottom: 5, ...style }}>
      <span style={{ color: '#1a3a8c', fontWeight: 700, fontSize: 8 }}>{num} </span>
      <span style={{ color: '#111', fontSize: 9.5 }}>{label}</span>
    </div>
  )
}

function CaraDelantera() {
  return (
    <div style={{
      ...base,
      position: 'absolute', inset: 0,
      backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
      borderRadius: 12, overflow: 'hidden',
      background: 'linear-gradient(160deg,#fce8ec,#f5dde4,#edd4db)',
      boxShadow: '0 16px 60px rgba(0,0,80,0.22), 0 4px 16px rgba(0,0,60,0.14)',      display: 'flex', flexDirection: 'column'
    }}>
      <TramaSVG />
      <CabeceraAzul />

      {/* CUERPO */}
      <div style={{ position: 'relative', flex: 1 }}>

        {/* FOTO */}
        <div style={{ position: 'absolute', top: 14, left: 14 }}>
          <div style={{ color: '#1a3a8c', fontWeight: 700, fontSize: 8, marginBottom: 2 }}>6.</div>
          <div style={{
            width: 70, height: 88,
            background: 'rgba(180,180,210,0.22)',
            border: '1px solid rgba(0,0,100,0.12)',
            borderRadius: 3, overflow: 'hidden',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center'
          }}>
            <svg width="70" height="80" viewBox="0 0 70 80">
              <circle cx="35" cy="22" r="14" fill="rgba(0,0,100,0.13)" />
              <path d="M5,80 Q5,48 35,48 Q65,48 65,80 Z" fill="rgba(0,0,100,0.1)" />
            </svg>
          </div>
        </div>

        {/* CAMPOS */}
        <div style={{ position: 'absolute', top: 14, left: 96, right: 14 }}>
          <div style={{ marginBottom: 5 }}>
            <span style={{ color: '#1a3a8c', fontWeight: 700, fontSize: 8 }}>1. </span>
            <span style={{ color: '#111', fontSize: 9.5 }}>APELLIDOS</span>
            <div style={{ paddingLeft: 14, color: '#111', fontSize: 9.5 }}>NOMBRE</div>
          </div>
          <Campo num="2." label="LUGAR DE NACIMIENTO" />
          <div style={{ display: 'flex', gap: 12, marginBottom: 5 }}>
            <div>
              <span style={{ color: '#1a3a8c', fontWeight: 700, fontSize: 8 }}>3. </span>
              <span style={{ color: '#111', fontSize: 9.5 }}>FECHA NACIMIENTO</span>
            </div>
            <div>
              <span style={{ color: '#1a3a8c', fontWeight: 700, fontSize: 8 }}>3b. </span>
              <span style={{ color: '#111', fontSize: 9.5 }}>PAÍS</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, marginBottom: 5 }}>
            <div>
              <span style={{ color: '#1a3a8c', fontWeight: 700, fontSize: 8 }}>4a. </span>
              <span style={{ color: '#111', fontSize: 9.5 }}>FECHA EXPEDICIÓN</span>
            </div>
            <div>
              <span style={{ color: '#1a3a8c', fontWeight: 700, fontSize: 8 }}>4c. </span>
              <span style={{ color: '#111', fontSize: 9.5 }}>FECHA CADUCIDAD</span>
            </div>
          </div>
          <Campo num="4b." label="FECHA EXPEDICIÓN 2" />
          <Campo num="5." label="Nº DOCUMENTO" />
        </div>

        {/* CATEGORÍA */}
        <div style={{ position: 'absolute', bottom: 42, left: 14 }}>
          <div style={{ color: '#1a3a8c', fontWeight: 700, fontSize: 8, marginBottom: 2 }}>9.</div>
          <div style={{
            background: '#1a3a8c', color: '#fff',
            fontWeight: 700, fontSize: 13, width: 26, height: 18,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: 3
          }}>B</div>
        </div>

        {/* FIRMA */}
        <div style={{ position: 'absolute', bottom: 28, left: 96, right: 14 }}>
          <div style={{ borderBottom: '1px solid rgba(0,0,80,0.18)', marginBottom: 4 }} />
          <div style={{ fontSize: 7, color: 'rgba(0,0,80,0.3)', letterSpacing: 0.5 }}>
            FIRMA DEL TITULAR
          </div>
        </div>
      </div>

      {/* BANDA MRZ */}
      <div style={{
        height: 20, background: 'rgba(0,0,60,0.035)',
        borderTop: '1px solid rgba(0,0,60,0.07)',
        display: 'flex', alignItems: 'center', paddingLeft: 10
      }}>
        <span style={{ fontFamily: 'Courier New, monospace', fontSize: 6.5, color: 'rgba(0,0,80,0.17)', letterSpacing: 1 }}>
          IDESP&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
        </span>
      </div>
    </div>
  )
}

function CaraTrasera() {
  return (
    <div style={{
      ...base,
      position: 'absolute', inset: 0,
      backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
      transform: 'rotateY(180deg)',
      borderRadius: 12, overflow: 'hidden',
      background: 'linear-gradient(160deg,#fce8ec,#f5dde4,#edd4db)',
      boxShadow: '0 16px 60px rgba(0,0,80,0.22), 0 4px 16px rgba(0,0,60,0.14)',      display: 'flex', flexDirection: 'column'
    }}>
      <TramaSVG />
      <CabeceraAzul />

      {/* BANDA MAGNÉTICA */}
      <div style={{ height: 36, background: '#1a1a1a', margin: '10px 0', flexShrink: 0 }} />

      {/* CONTENIDO TRASERO */}
      <div style={{ padding: '0 14px', flex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '30px 1fr 1fr 30px 30px 40px', gap: 4, borderBottom: '1px solid rgba(0,0,80,0.1)', paddingBottom: 4, marginBottom: 4 }}>
          {['9', '10', '11', '12', '13', '14'].map(h => (
            <span key={h} style={{ color: '#1a3a8c', fontWeight: 700, fontSize: 7 }}>{h}</span>
          ))}
        </div>
        {[['B', true], ['A1', false], ['A2', false]].map(([cat, active]) => (
          <div key={cat} style={{
            display: 'grid', gridTemplateColumns: '30px 1fr 1fr 30px 30px 40px',
            gap: 4, padding: '4px 0', borderBottom: '1px solid rgba(0,0,80,0.07)',
            alignItems: 'center'
          }}>
            <span style={{
              background: active ? '#1a3a8c' : 'transparent',
              color: active ? '#fff' : '#1a3a8c',
              border: active ? 'none' : '1px solid #1a3a8c',
              fontWeight: 700, fontSize: 7.5, padding: '1px 3px', borderRadius: 2, display: 'inline-block'
            }}>{cat}</span>
            <span style={{ color: '#555', fontSize: 7 }}>EXPEDICIÓN</span>
            <span style={{ color: '#555', fontSize: 7 }}>CADUCIDAD</span>
            <span style={{ color: '#555', fontSize: 7 }}>—</span>
            <span style={{ color: '#555', fontSize: 7 }}>—</span>
            <span style={{ color: '#555', fontSize: 7 }}>—</span>
          </div>
        ))}
      </div>

      {/* BANDA MRZ */}
      <div style={{
        height: 20, background: 'rgba(0,0,60,0.035)',
        borderTop: '1px solid rgba(0,0,60,0.07)',
        display: 'flex', alignItems: 'center', paddingLeft: 10
      }}>
        <span style={{ fontFamily: 'Courier New, monospace', fontSize: 6.5, color: 'rgba(0,0,80,0.17)', letterSpacing: 1 }}>
          APELLIDOS&lt;&lt;NOMBRE&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
        </span>
      </div>
    </div>
  )
}

export default function CarnetConducir() {
  const [girado, setGirado] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
      <div
        onClick={() => setGirado(g => !g)}
        style={{
          width: 500, height: 310,
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: girado ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.65s cubic-bezier(.4,0,.2,1)',
          cursor: 'pointer',
          maxWidth: '100%'
        }}
      >
        <CaraDelantera />
        <CaraTrasera />
      </div>
      <span style={{ fontSize: '0.72rem', color: '#5a5d6a', letterSpacing: '0.05em' }}>
        Toca para girar
      </span>
    </div>
  )
}
