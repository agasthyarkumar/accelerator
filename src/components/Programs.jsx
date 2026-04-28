import { useState } from 'react'

const PROGRAMS = [
  {
    title: 'Generative AI\n& AI Agents',
    from: '#2a0e04', to: '#0d0200',
    accent: '#fb923c',
    badge: 'Most Popular',
    who: 'For Aspiring And Existing Product Managers, Analysts, And Founders Entering AI.',
    covers: 'Covers How To Build, Launch, And Scale AI-Powered Products From Idea To Execution.',
  },
  {
    title: 'AI Product\nManagement',
    from: '#0c1f3f', to: '#010810',
    accent: '#60a5fa',
    badge: 'High Demand',
    who: 'For Product Managers, Business Analysts, And Entrepreneurs Ready To Lead AI Products.',
    covers: 'Covers AI Product Strategy, Roadmapping, User Research, And Go-To-Market For AI Products.',
  },
  {
    title: 'Advanced AI\n& AI Agents',
    from: '#1a0a2e', to: '#05010f',
    accent: '#c084fc',
    badge: 'New',
    who: 'For Developers And Engineers Looking To Go Deeper Into Agent Systems And LLM Workflows.',
    covers: 'Covers Advanced Prompt Engineering, Multi-Agent Frameworks, And Deploying AI At Scale.',
  },
  {
    title: 'AI Data\nScience',
    from: '#012318', to: '#000a06',
    accent: '#34d399',
    badge: null,
    who: 'For Analysts, Engineers, And Domain Experts Transitioning Into AI-Driven Data Roles.',
    covers: 'Covers Machine Learning, Model Building, Feature Engineering, And Real-World Data Projects.',
  },
  {
    title: 'AI Data\nAnalytics',
    from: '#021e2e', to: '#000a12',
    accent: '#22d3ee',
    badge: 'High Demand',
    who: 'For Business Analysts, Ops Leads, And Anyone Who Works With Data Day-To-Day.',
    covers: 'Covers SQL, Power BI, Python Analytics, And Storytelling With Data For Business Impact.',
  },
  {
    title: 'AI Digital\nMarketing',
    from: '#021a0a', to: '#000a04',
    accent: '#86efac',
    badge: null,
    who: 'For Marketers, Content Creators, And Growth Professionals Ready To Leverage AI Tools.',
    covers: 'Covers AI-Powered Campaigns, SEO Automation, Content Generation, And Performance Analytics.',
  },
]

const WHO_INFO = {
  who: 'For Aspiring And Existing Product Managers, Analysts, And Founders Entering AI.',
  covers: 'Covers How To Build, Launch, And Scale AI-Powered Products From Idea To Execution.',
}

function PersonSilhouette({ accent }) {
  return (
    <svg viewBox="0 0 140 260" width="140" height="260" style={{ display: 'block' }}>
      <defs>
        <radialGradient id={`hg-${accent.replace('#','')}`} cx="50%" cy="30%" r="55%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id={`fg-${accent.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.7)" />
        </linearGradient>
      </defs>
      <ellipse cx="70" cy="130" rx="65" ry="110" fill={`url(#hg-${accent.replace('#','')})`} />
      {/* Head */}
      <circle cx="70" cy="54" r="30" fill="#7a5235" />
      {/* Hair */}
      <path d="M42 50 Q48 20 70 18 Q92 20 98 50 Q90 32 70 30 Q50 32 42 50Z" fill="#1a0c04" />
      {/* Long hair sides for female look */}
      <path d="M42 50 Q36 90 40 130 Q46 110 48 80Z" fill="#1a0c04" opacity="0.8"/>
      <path d="M98 50 Q104 90 100 130 Q94 110 92 80Z" fill="#1a0c04" opacity="0.8"/>
      {/* Neck */}
      <rect x="62" y="80" width="16" height="14" fill="#7a5235" />
      {/* Body/shirt */}
      <path d="M22 96 Q22 88 46 84 L62 96 L70 106 L78 96 L94 84 Q118 88 118 96 L122 260 H18Z" fill="#f0f0f0" />
      {/* Shirt collar detail */}
      <path d="M60 84 L70 106 L80 84 L75 78 L70 88 L65 78Z" fill="#e0e0e0" />
      {/* Jacket/blazer left */}
      <path d="M22 96 Q4 114 10 158 L32 150 Q28 124 38 108Z" fill="#2a2a2a" />
      <path d="M18 260 Q24 215 32 150 L50 144 Q38 210 40 260Z" fill="#2a2a2a" opacity="0.85" />
      {/* Jacket/blazer right */}
      <path d="M118 96 Q136 114 130 158 L108 150 Q112 124 102 108Z" fill="#2a2a2a" />
      <path d="M122 260 Q116 215 108 150 L90 144 Q102 210 100 260Z" fill="#2a2a2a" opacity="0.85" />
      {/* Crossed arms */}
      <path d="M28 148 Q38 136 60 134 Q72 132 78 136 Q62 140 48 154 Q38 162 28 148Z" fill="#7a5235" />
      <path d="M112 148 Q102 136 80 134 Q68 132 62 136 Q78 140 92 154 Q102 162 112 148Z" fill="#7a5235" />
      {/* AcceleratorX logo hint on shirt */}
      <text x="58" y="122" fontSize="5" fill="#aaa" fontFamily="sans-serif" fontWeight="bold">AcceleratorX</text>
    </svg>
  )
}

function ProgramCard({ program }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', borderRadius: 18, overflow: 'hidden', cursor: 'pointer',
        background: `linear-gradient(140deg, ${program.from} 0%, ${program.to} 100%)`,
        aspectRatio: '4/3',
        transition: 'transform 0.28s ease, box-shadow 0.28s ease',
        transform: hover ? 'translateY(-4px)' : 'none',
        boxShadow: hover
          ? `0 20px 48px rgba(0,0,0,0.55), 0 0 0 1px ${program.accent}44`
          : '0 4px 20px rgba(0,0,0,0.3)',
      }}
    >
      {/* Ambient glow top */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: `radial-gradient(ellipse 70% 40% at 70% 10%, ${program.accent}22 0%, transparent 70%)`,
      }} />

      {/* Person silhouette — visible when not hovered */}
      <div style={{
        position: 'absolute', bottom: 0, right: 12, zIndex: 2,
        opacity: hover ? 0 : 1,
        transform: hover ? 'translateX(20px)' : 'translateX(0)',
        transition: 'opacity 0.25s ease, transform 0.25s ease',
        pointerEvents: 'none',
      }}>
        <PersonSilhouette accent={program.accent} />
      </div>

      {/* Bottom gradient for text readability */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(0,0,0,0.88) 40%, transparent 75%)',
        opacity: hover ? 0 : 1,
        transition: 'opacity 0.25s ease',
      }} />

      {/* Badge — top right, always visible above hover overlay */}
      {program.badge && (
        <div style={{
          position: 'absolute', top: 16, right: 16, zIndex: 6,
          background: `${program.accent}22`, border: `1px solid ${program.accent}55`,
          borderRadius: 20, padding: '4px 12px',
          fontSize: 11, fontWeight: 700, color: program.accent,
        }}>
          {program.badge}
        </div>
      )}

      {/* Default: title bottom-left */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 20px 22px',
        zIndex: 4,
        opacity: hover ? 0 : 1,
        transform: hover ? 'translateY(8px)' : 'none',
        transition: 'opacity 0.2s ease, transform 0.2s ease',
        pointerEvents: 'none',
      }}>
        <h3 style={{
          color: '#fff', fontSize: 'clamp(18px,1.8vw,24px)', fontWeight: 900,
          lineHeight: 1.2, letterSpacing: '-0.02em', whiteSpace: 'pre-line', margin: 0,
        }}>
          {program.title}
        </h3>
      </div>

      {/* Hover: WHO IS IT FOR content */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 4,
        background: `linear-gradient(145deg, ${program.from}ee 0%, ${program.to}dd 100%)`,
        backdropFilter: 'blur(2px)',
        padding: '24px 22px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12,
        opacity: hover ? 1 : 0,
        transform: hover ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.28s ease, transform 0.28s ease',
        pointerEvents: 'none',
      }}>
        <div style={{ color: '#fff', fontWeight: 800, fontSize: 13, letterSpacing: '0.08em' }}>
          WHO IS IT FOR?
        </div>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>
          {program.who}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 12.5, lineHeight: 1.7, margin: 0 }}>
          {program.covers}
        </p>
        <div style={{ marginTop: 4 }}>
          <h3 style={{
            color: '#fff', fontSize: 'clamp(16px,1.5vw,20px)', fontWeight: 900,
            lineHeight: 1.2, letterSpacing: '-0.02em', whiteSpace: 'pre-line', margin: 0,
            opacity: 0.5, borderTop: `1px solid ${program.accent}44`, paddingTop: 14,
          }}>
            {program.title}
          </h3>
        </div>
      </div>
    </div>
  )
}

function InfoCard() {
  return (
    <div style={{
      borderRadius: 18, overflow: 'hidden', cursor: 'default',
      background: 'linear-gradient(145deg, #0d1117 0%, #111827 100%)',
      border: '1px solid rgba(255,255,255,0.08)',
      aspectRatio: '4/3',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '28px 26px',
      gap: 14,
    }}>
      <div style={{ color: '#fff', fontWeight: 800, fontSize: 14, letterSpacing: '0.08em' }}>
        WHO IS IT FOR?
      </div>
      <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.75, margin: 0 }}>
        For Aspiring And Existing Product Managers, Analysts, And Founders Entering AI. Covers How To Build, Launch, And Scale AI-Powered Products From Idea To Execution.
      </p>
    </div>
  )
}

export default function Programs() {
  return (
    <section style={{ background: '#0a0a0f', padding: '88px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 14 }}>
            Choose Your AI Career Path and Build Your AI Edge
          </h2>
          <p style={{ color: '#6b7280', fontSize: 16, maxWidth: 680, margin: '0 auto', lineHeight: 1.6 }}>
            From startups to global companies like Microsoft, Deloitte, Paytm, and many more. Our learners are applying AI, product, data analytics, and automation skills in high-paying AI roles.
          </p>
        </div>

        {/* Row 1: 3 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 20 }}>
          <ProgramCard program={PROGRAMS[0]} />
          <ProgramCard program={PROGRAMS[1]} />
          <ProgramCard program={PROGRAMS[2]} />
        </div>

        {/* Row 2: 3 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <ProgramCard program={PROGRAMS[3]} />
          <ProgramCard program={PROGRAMS[4]} />
          <ProgramCard program={PROGRAMS[5]} />
        </div>

      </div>
    </section>
  )
}
