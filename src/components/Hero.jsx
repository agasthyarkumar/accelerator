import { useEffect, useState } from 'react'
import { ArrowUpRight, BarChart2, Megaphone, Brain, Code2, TrendingUp, Cpu } from 'lucide-react'
import ParticleField from './ParticleField'

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&?<>'

function useScramble(text, delay = 300) {
  const [display, setDisplay] = useState(() => text.replace(/[^ ]/g, SCRAMBLE_CHARS[0]))
  useEffect(() => {
    let frame = 0; let raf
    const total = text.length * 3
    const timer = setTimeout(() => {
      const tick = () => {
        setDisplay(text.split('').map((ch, i) => {
          if (ch === ' ') return ' '
          if (i <= Math.floor(frame / 3)) return ch
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
        }).join(''))
        frame++
        if (frame <= total) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, delay)
    return () => { clearTimeout(timer); cancelAnimationFrame(raf) }
  }, [text, delay])
  return display
}

const BADGES = [
  { icon: Megaphone, label: 'AI Digital Marketing',   color: '#10b981', top: 220, left: -10 },
  { icon: Code2,     label: 'Generative AI',           color: '#8b5cf6', top: 128, right: -10 },
  { icon: TrendingUp,label: 'AI Data Analytics',       color: '#3b82f6', top: 295, left: -20 },
  { icon: BarChart2, label: 'AI Data Science',         color: '#f59e0b', top: 345, right: -10 },
  { icon: Brain,     label: 'AI Product Management',   color: '#6366f1', bottom: 110, left: 28 },
  { icon: Cpu,       label: 'Advanced Generative AI',  color: '#ec4899', bottom: 46,  right: 18 },
]

const AVATARS = [
  { bg: '#3b82f6', letter: 'S' }, { bg: '#8b5cf6', letter: 'A' },
  { bg: '#10b981', letter: 'P' }, { bg: '#f59e0b', letter: 'R' },
]

export default function Hero({ onNav }) {
  const line1 = useScramble('Stop Using AI.', 300)
  const line2 = useScramble('Start Building With It.', 800)

  return (
    <section style={{ position: 'relative', minHeight: '100vh', background: '#050508', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 64 }}>
      <ParticleField count={55} />

      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(37,99,235,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,0.03) 1px,transparent 1px)',
        backgroundSize: '72px 72px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 60% 50%, black 20%, transparent 100%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="grid md:grid-cols-2" style={{ gap: 56, alignItems: 'center' }}>

          {/* Left */}
          <div>
            <h1 style={{ color: '#fff', fontSize: 'clamp(36px,4.2vw,66px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 24 }}>
              <span style={{ display: 'block', fontFamily: 'monospace', fontSize: '0.9em' }}>{line1}</span>
              <span style={{ display: 'block', fontFamily: 'monospace', fontSize: '0.9em' }}>
                <span style={{ color: '#fff' }}>Start </span>
                <span style={{ background: 'linear-gradient(90deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Building </span>
                <span style={{ color: '#fff' }}>With It.</span>
              </span>
            </h1>

            <p style={{ color: '#6b7280', fontSize: 17, lineHeight: 1.7, marginBottom: 44, maxWidth: 440 }}>
              AI Courses in India For Working Professionals, Freshers and Business Owners. Focusing on project and real career outcomes.
            </p>

            <button onClick={() => onNav('programs')} style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'linear-gradient(135deg,#2563eb,#6d28d9)',
              color: '#fff', padding: '15px 36px', borderRadius: 40,
              fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(37,99,235,0.5)', transition: 'box-shadow 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 48px rgba(37,99,235,0.7)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.5)'}
            >
              Explore Our Programs <ArrowUpRight style={{ width: 18, height: 18 }} />
            </button>
          </div>

          {/* Right — hero card with floating badges */}
          <div className="hidden md:block" style={{ position: 'relative', height: 530 }}>

            {/* Dark card */}
            <div style={{
              position: 'absolute', top: 20, bottom: 20, left: 10, right: 10,
              background: 'linear-gradient(160deg,#0f1628 0%,#1a0e2e 60%,#0a0d16 100%)',
              borderRadius: 28,
              border: '1px solid rgba(255,255,255,0.09)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)',
              overflow: 'hidden',
            }}>
              {/* Top bar */}
              <div style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.05)', borderRadius: 30, padding: '8px 14px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex' }}>
                    {AVATARS.map(({ bg, letter }, i) => (
                      <div key={i} style={{ width: 26, height: 26, borderRadius: '50%', background: bg, border: '2px solid #0f1628', marginLeft: i ? -8 : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#fff', fontWeight: 800 }}>{letter}</div>
                    ))}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>1998+</div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>Happy Students</div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em', marginBottom: 2 }}>In collaboration with</div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: '#fff', fontFamily: 'monospace', letterSpacing: '-0.02em' }}>IBM.</div>
                </div>
              </div>

              {/* Blue glow */}
              <div style={{ position: 'absolute', width: 340, height: 340, background: 'radial-gradient(circle,rgba(37,99,235,0.22) 0%,transparent 70%)', borderRadius: '50%', bottom: 60, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} />

              {/* Person SVG */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <svg viewBox="0 0 300 460" style={{ width: '72%' }}>
                  <circle cx="150" cy="105" r="62" fill="#c8956a" />
                  <path d="M90 90 Q98 32 150 30 Q202 32 210 90 Q196 58 150 56 Q104 58 90 90Z" fill="#1a0804" />
                  <path d="M120 85 Q130 82 138 85" stroke="#3d1a0a" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M162 85 Q170 82 180 85" stroke="#3d1a0a" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <ellipse cx="132" cy="98" rx="8" ry="9" fill="#2d1408"/>
                  <ellipse cx="168" cy="98" rx="8" ry="9" fill="#2d1408"/>
                  <circle cx="134" cy="96" r="2.5" fill="#fff"/>
                  <circle cx="170" cy="96" r="2.5" fill="#fff"/>
                  <path d="M148 108 Q150 118 155 108" stroke="#a0694a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M132 125 Q150 138 168 125" stroke="#a0694a" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <rect x="133" y="162" width="34" height="28" fill="#c8956a"/>
                  <path d="M65 192 Q65 182 105 175 L133 192 L150 208 L167 192 L195 175 Q235 182 235 192 L242 440 Q195 460 150 462 Q105 460 58 440Z" fill="#f0f4f8"/>
                  <path d="M131 176 L150 208 L169 176 L160 168 L150 184 L140 168Z" fill="#e2e8f0"/>
                  <path d="M65 192 Q28 220 36 302 L74 292 Q68 248 84 215Z" fill="#1e3a5f"/>
                  <path d="M235 192 Q272 220 264 302 L226 292 Q232 248 216 215Z" fill="#1e3a5f"/>
                  <path d="M58 440 Q68 380 74 292 L104 282 Q92 380 92 440Z" fill="#1e3a5f" opacity="0.65"/>
                  <path d="M242 440 Q232 380 226 292 L196 282 Q208 380 208 440Z" fill="#1e3a5f" opacity="0.65"/>
                  <rect x="80" y="295" width="140" height="95" rx="9" fill="#1e293b" transform="rotate(-4 150 342)"/>
                  <rect x="87" y="302" width="126" height="80" rx="7" fill="#0f172a" transform="rotate(-4 150 342)"/>
                  <line x1="99" y1="320" x2="163" y2="316" stroke="#3b82f6" strokeWidth="3.5" strokeLinecap="round" opacity="0.9"/>
                  <line x1="99" y1="332" x2="143" y2="328" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
                  <line x1="99" y1="344" x2="173" y2="340" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
                  <circle cx="160" cy="350" r="8" fill="#22c55e" opacity="0.8"/>
                  <path d="M156 350 L159 353 L165 347" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Floating badges */}
            {BADGES.map(({ icon: Icon, label, color, ...pos }, idx) => {
              const posStyle = {}
              if (pos.top !== undefined) posStyle.top = pos.top
              if (pos.bottom !== undefined) posStyle.bottom = pos.bottom
              if (pos.left !== undefined) posStyle.left = pos.left
              if (pos.right !== undefined) posStyle.right = pos.right
              return (
                <div key={label} className="animate-float"
                  style={{
                    position: 'absolute', ...posStyle,
                    display: 'flex', alignItems: 'center', gap: 8,
                    background: 'rgba(255,255,255,0.96)',
                    borderRadius: 40, padding: '9px 16px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                    fontSize: 12.5, fontWeight: 700, color: '#111827',
                    whiteSpace: 'nowrap', zIndex: 10,
                    animationDelay: `${idx * 0.45}s`,
                  }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${color}20`, border: `1.5px solid ${color}60`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon style={{ width: 11, height: 11, color }} />
                  </div>
                  {label}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
