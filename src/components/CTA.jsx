const AVATARS = [
  { bg: '#3b82f6', l: 'S' }, { bg: '#8b5cf6', l: 'A' },
  { bg: '#10b981', l: 'P' }, { bg: '#f59e0b', l: 'R' },
]

export default function CTA({ onNav }) {
  return (
    <section style={{ background: '#050508', padding: '64px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(135deg,#1e1b4b 0%,#1e3a8a 50%,#1a1040 100%)',
          borderRadius: 24,
          padding: '56px 48px',
          display: 'grid', gridTemplateColumns: '1fr auto',
          gap: 48, alignItems: 'center',
          position: 'relative', overflow: 'hidden',
          border: '1px solid rgba(99,102,241,0.25)',
        }}>
          {/* Blue glow */}
          <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(circle,rgba(37,99,235,0.2) 0%,transparent 70%)', borderRadius: '50%', top: '50%', left: '30%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

          {/* Left content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 900, lineHeight: 1.2, letterSpacing: '-0.03em', marginBottom: 16, maxWidth: 520 }}>
              Take First Step Towards Your AI Career Before It's Too Late
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 16, marginBottom: 32, lineHeight: 1.6, maxWidth: 440 }}>
              Join 12,700+ professionals who've accelerated their careers through mentor-led, job-focused AI upskilling
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <button onClick={() => onNav('register')} style={{
                background: '#2563eb', color: '#fff',
                padding: '14px 32px', borderRadius: 40,
                fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(37,99,235,0.45)',
                transition: 'box-shadow 0.2s, background 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1d4ed8'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(37,99,235,0.6)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,99,235,0.45)' }}
              >
                Start Your AI Career Journey
              </button>

              {/* Student count */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex' }}>
                  {AVATARS.map(({ bg, l }, i) => (
                    <div key={i} style={{ width: 28, height: 28, borderRadius: '50%', background: bg, border: '2px solid #1e1b4b', marginLeft: i ? -8 : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#fff', fontWeight: 800 }}>{l}</div>
                  ))}
                </div>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 600 }}>1998+</span>
              </div>
            </div>
          </div>

          {/* Right — person illustration */}
          <div style={{ position: 'relative', zIndex: 1, width: 200, flexShrink: 0 }}>
            <svg viewBox="0 0 200 310" style={{ width: '100%' }}>
              {/* Blue blob behind */}
              <ellipse cx="100" cy="200" rx="90" ry="110" fill="#2563eb" opacity="0.25"/>
              <ellipse cx="100" cy="200" rx="75" ry="95"  fill="#3b82f6" opacity="0.2"/>
              {/* Person - woman with diploma */}
              <circle cx="100" cy="62" r="42" fill="#c8956a"/>
              <path d="M62 54 Q68 22 100 20 Q132 22 138 54 Q126 36 100 34 Q74 36 62 54Z" fill="#1a0804"/>
              {/* Hair longer */}
              <path d="M60 65 Q55 90 58 110" stroke="#1a0804" strokeWidth="14" fill="none" strokeLinecap="round"/>
              <path d="M140 65 Q145 90 142 110" stroke="#1a0804" strokeWidth="14" fill="none" strokeLinecap="round"/>
              <rect x="86" y="100" width="28" height="18" fill="#c8956a"/>
              {/* Dark suit */}
              <path d="M40 118 Q40 110 70 104 L86 118 L100 130 L114 118 L130 104 Q160 110 160 118 L164 280 Q130 295 100 297 Q70 295 36 280Z" fill="#1e293b"/>
              <path d="M84 105 L100 130 L116 105 L108 98 L100 112 L92 98Z" fill="#f8fafc"/>
              {/* Arms */}
              <path d="M40 118 Q16 138 22 190 L48 182 Q44 152 58 130Z" fill="#1e293b"/>
              <path d="M160 118 Q184 138 178 190 L152 182 Q156 152 142 130Z" fill="#1e293b"/>
              {/* Diploma scroll */}
              <rect x="55" y="175" width="90" height="60" rx="8" fill="#fef3c7" transform="rotate(-12 100 205)"/>
              <rect x="60" y="180" width="80" height="50" rx="6" fill="#fde68a" transform="rotate(-12 100 205)"/>
              <line x1="65" y1="195" x2="125" y2="188" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" transform="rotate(-12 100 205)"/>
              <line x1="65" y1="205" x2="115" y2="198" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" transform="rotate(-12 100 205)"/>
              <circle cx="75" cy="218" r="8" fill="#dc2626" transform="rotate(-12 100 205)"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
