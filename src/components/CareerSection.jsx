import { useState, useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import BorderGlow from './BorderGlow'

const TABS = [
  'AI Product Management',
  'AI Digital Marketing',
  'AI Data Science',
  'Generative AI',
  'Advanced Generative AI',
]

const CHART_DATA = {
  'AI Product Management':    [15, 22, 30, 38, 46, 54, 61, 67, 72, 76],
  'AI Digital Marketing':     [12, 17, 24, 30, 37, 44, 50, 56, 61, 65],
  'AI Data Science':          [14, 20, 28, 36, 45, 54, 62, 68, 73, 77],
  'Generative AI':            [16, 24, 33, 43, 53, 62, 69, 74, 78, 80],
  'Advanced Generative AI':   [18, 27, 38, 49, 60, 68, 74, 78, 81, 83],
}
const AVG_DATA = [12, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17]
const YEARS   = [2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035]
const Y_LABELS = [0, 15, 30, 45, 60, 75]

function smoothPath(pts, W, H, maxY) {
  const xs = pts.map((_, i) => (i / (pts.length - 1)) * W)
  const ys = pts.map(v => H - (v / maxY) * H)
  let d = `M ${xs[0]} ${ys[0]}`
  for (let i = 1; i < pts.length; i++) {
    const cpx1 = xs[i - 1] + (xs[i] - xs[i - 1]) / 3
    const cpx2 = xs[i] - (xs[i] - xs[i - 1]) / 3
    d += ` C ${cpx1} ${ys[i - 1]}, ${cpx2} ${ys[i]}, ${xs[i]} ${ys[i]}`
  }
  return { d, xs, ys }
}

function SalaryChart({ tab }) {
  const W = 700, H = 320, maxY = 90
  const perf = CHART_DATA[tab] || CHART_DATA['AI Product Management']
  const { d: perfPath, xs, ys } = smoothPath(perf, W, H, maxY)
  const { d: avgPath, xs: axs, ys: ays } = smoothPath(AVG_DATA, W, H, maxY)
  const areaPath = `${perfPath} L ${W} ${H} L 0 ${H} Z`

  const [animKey, setAnimKey] = useState(0)
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
    setAnimKey(k => k + 1)
  }
  const handleMouseLeave = () => setHovered(false)

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ background: 'linear-gradient(160deg,#0d1117,#111827)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)', padding: '28px 24px 16px', overflow: 'hidden', position: 'relative', cursor: 'default' }}
    >
      <style>{`
        @keyframes drawPath {
          from { stroke-dashoffset: 1; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes growDot {
          from { opacity: 0; transform: scale(0); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeArea {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 24, marginBottom: 24, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: '#6b7280', fontWeight: 700, letterSpacing: '0.06em' }}>
          <svg width="28" height="10"><line x1="0" y1="5" x2="28" y2="5" stroke="#4b5563" strokeWidth="1.5" strokeDasharray="4 3"/></svg>
          AVERAGE ANALYTICS
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: '#60a5fa', fontWeight: 700, letterSpacing: '0.06em' }}>
          <svg width="28" height="10"><line x1="0" y1="5" x2="28" y2="5" stroke="#3b82f6" strokeWidth="1.8"/></svg>
          PERFORMANCE ANALYTICS
        </div>
      </div>

      <svg viewBox={`0 0 ${W + 60} ${H + 50}`} style={{ width: '100%', overflow: 'visible' }}>
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.01"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <g transform="translate(44,4)">
          {/* Y grid lines + labels */}
          {Y_LABELS.map(v => {
            const y = H - (v / maxY) * H
            return (
              <g key={v}>
                <line x1="0" y1={y} x2={W} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                <text x="-8" y={y + 4} fill="#4b5563" fontSize="11" textAnchor="end" fontFamily="monospace">₹{v}L</text>
              </g>
            )
          })}

          {/* X labels */}
          {YEARS.map((yr, i) => (
            <text key={yr} x={(i / (YEARS.length - 1)) * W} y={H + 28} fill="#4b5563" fontSize="11" textAnchor="middle" fontFamily="monospace">{yr}</text>
          ))}

          {/* Area fill — animates in on hover */}
          <path
            key={`area-${animKey}`}
            d={areaPath}
            fill="url(#areaGrad)"
            style={hovered ? { animation: 'fadeArea 0.6s ease 0.8s both' } : { opacity: 0.4 }}
          />

          {/* Average dashed line */}
          <path d={avgPath} fill="none" stroke="#4b5563" strokeWidth="1" strokeDasharray="5 4" />
          {axs.map((x, i) => (
            <circle key={i} cx={x} cy={ays[i]} r="2.5" fill="none" stroke="#4b5563" strokeWidth="1"/>
          ))}

          {/* Performance line — draws on hover */}
          <path
            key={`line-${animKey}`}
            d={perfPath}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.8"
            strokeLinecap="round"
            pathLength="1"
            strokeDasharray="1"
            filter="url(#glow)"
            style={hovered
              ? { animation: 'drawPath 1.2s cubic-bezier(0.4,0,0.2,1) forwards' }
              : { strokeDashoffset: 0 }
            }
          />

          {/* Dots — pop in after line completes */}
          {xs.map((x, i) => (
            <circle
              key={`dot-${animKey}-${i}`}
              cx={x} cy={ys[i]} r="4.5"
              fill="#0d1117" stroke="#3b82f6" strokeWidth="1.8"
              style={hovered
                ? { animation: `growDot 0.3s ease ${1.0 + i * 0.06}s both`, transformOrigin: `${x}px ${ys[i]}px` }
                : { opacity: 1 }
              }
            />
          ))}
        </g>
      </svg>
    </div>
  )
}

const PROJECTS = [
  { title: 'Omni-Channel Social Media Agent', holder: 'Siddiq Ahmed',      holderColor: '#22c55e', desc: 'It converts content from a single URL into optimized social media posts', tags: ['NEXT.JS', 'DOCKER'] },
  { title: 'Edubudy GPT Bot',                 holder: 'Amit Thakkar',      holderColor: '#3b82f6', desc: 'It helps you solve math problems by breaking them down into simple, easy-to-understand steps', tags: ['WEB APP', 'SECURITY'] },
  { title: 'Trust Browser',                   holder: 'Agam Bansal',       holderColor: '#8b5cf6', desc: 'A product concept designed to make credibility a first-class part of the browsing experience', tags: ['CREDIBILITY SYSTEM'] },
  { title: 'Classmate.io',                    holder: 'Biswajit Pradhan',  holderColor: '#6366f1', desc: 'A comprehensive product build for Early age students, professionals and aspirants', tags: ['FRONT END', 'BACKEND'] },
  { title: 'Netflix Content & Analysis',      holder: 'Bhagyashree K.',    holderColor: '#22c55e', desc: 'Built an interactive Power BI dashboard to analyze Netflix movies and series', tags: ['AI', 'WEB APP'] },
  { title: 'Analytics Dashboard',             holder: 'Satyendra Mourya',  holderColor: '#f59e0b', desc: 'Comprehensive analysis of Washington State EV population data', tags: ['DASHBOARD'] },
]

function ProjectCard({ project }) {
  return (
    <BorderGlow
      borderRadius={14}
      backgroundColor="#0d1117"
      glowColor="220 80 70"
      colors={['#3b82f6', '#6366f1', '#8b5cf6']}
      glowIntensity={1.1}
      fillOpacity={0.06}
      coneSpread={28}
    >
      <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: 12, height: '100%', boxSizing: 'border-box' }}>
        <h3 style={{ color: '#f9fafb', fontWeight: 700, fontSize: 15, lineHeight: 1.3 }}>{project.title}</h3>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, border: `1px solid ${project.holderColor}44`, borderRadius: 20, padding: '4px 12px', width: 'fit-content' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: project.holderColor, display: 'inline-block' }} />
          <span style={{ fontSize: 11, color: project.holderColor, fontWeight: 600 }}>Project Holder: {project.holder}</span>
        </div>
        <p style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.6, flex: 1 }}>{project.desc}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          {project.tags.map(t => (
            <span key={t} style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: 6, padding: '4px 10px', fontSize: 11, color: '#9ca3af', fontWeight: 600 }}>{t}</span>
          ))}
          <button style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 5, border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '5px 12px', fontSize: 12, color: '#d1d5db', background: 'none', cursor: 'pointer', fontWeight: 600 }}>
            View Project <ExternalLink style={{ width: 11, height: 11 }} />
          </button>
        </div>
      </div>
    </BorderGlow>
  )
}

export default function CareerSection() {
  const [tab, setTab] = useState(TABS[0])

  return (
    <section style={{ background: '#050508', padding: '88px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Salary chart section */}
        <div style={{ marginBottom: 88 }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, letterSpacing: '-0.03em', maxWidth: 680, margin: '0 auto 16px', lineHeight: 1.25 }}>
              If you're not learning AI, data analytics, products, or automations, you're falling behind in today's job market.
            </h2>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 36 }}>
            {TABS.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                padding: '8px 18px', borderRadius: 40,
                border: `1px solid ${tab === t ? 'transparent' : 'rgba(255,255,255,0.15)'}`,
                background: tab === t ? '#2563eb' : 'transparent',
                color: tab === t ? '#fff' : '#9ca3af',
                fontWeight: 600, fontSize: 13, cursor: 'pointer', transition: 'all 0.2s',
              }}>
                {t}
              </button>
            ))}
          </div>

          <SalaryChart tab={tab} />
        </div>

        {/* BuildrX section — inside a containing box */}
        <div style={{
          background: 'linear-gradient(160deg,#0d1117 0%,#111827 100%)',
          borderRadius: 24,
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '48px 40px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Subtle top glow */}
          <div style={{ position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)', width: 500, height: 200, background: 'radial-gradient(ellipse,rgba(37,99,235,0.12) 0%,transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ textAlign: 'center', marginBottom: 44, position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 1, marginBottom: 8 }}>
              <span style={{ color: '#fff', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', letterSpacing: '-0.04em' }}>Buildr</span>
              <span style={{ color: '#2563eb', fontStyle: 'italic', fontWeight: 900, fontSize: 'clamp(28px,4vw,48px)', display: 'inline-block', transform: 'skewX(-6deg)' }}>X</span>
            </div>
            <p style={{ color: '#6b7280', fontSize: 15, marginTop: 4 }}>Projects built with BuildrX</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 16, position: 'relative', zIndex: 1 }}>
            {PROJECTS.map(p => <ProjectCard key={p.title} project={p} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
