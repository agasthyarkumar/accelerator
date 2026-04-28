import Logo from './Logo'

const COMPANY   = ['Home', 'Product', 'Blogs', 'Services']
const HELP      = ['Customer Support', 'Terms & Conditions', 'Privacy Policy']
const RESOURCES = ['Free eBooks', 'Development Tutorial', 'Free course Playlist']

function ColLink({ children }) {
  return (
    <button style={{ display: 'block', background: 'none', border: 'none', color: '#6b7280', fontSize: 14, cursor: 'pointer', padding: '0 0 10px', textAlign: 'left', transition: 'color 0.15s' }}
      onMouseEnter={e => e.currentTarget.style.color = '#d1d5db'}
      onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
    >{children}</button>
  )
}

function SocialCircle({ label, svg }) {
  return (
    <button aria-label={label} style={{ width: 38, height: 38, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'border-color 0.15s, background 0.15s' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.5)'; e.currentTarget.style.background = 'rgba(37,99,235,0.12)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
    >
      {svg}
    </button>
  )
}

const LI_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)
const IG_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const FB_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer style={{ background: '#050508', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <Logo dark size="lg" />
            <p style={{ color: '#6b7280', fontSize: 13.5, marginTop: 14, lineHeight: 1.6, maxWidth: 220 }}>
              Be a real AI version product by joining us.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              <SocialCircle label="LinkedIn"  svg={LI_SVG} />
              <SocialCircle label="Instagram" svg={IG_SVG} />
              <SocialCircle label="Facebook"  svg={FB_SVG} />
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ display: 'inline-block', width: 16, height: 1.5, background: '#2563eb' }} />
              COMPANY
            </div>
            {COMPANY.map(item => <ColLink key={item}>{item}</ColLink>)}
          </div>

          {/* HELP */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ display: 'inline-block', width: 16, height: 1.5, background: '#2563eb' }} />
              HELP
            </div>
            {HELP.map(item => <ColLink key={item}>{item}</ColLink>)}
          </div>

          {/* RESOURCES */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ display: 'inline-block', width: 16, height: 1.5, background: '#2563eb' }} />
              RESOURCES
            </div>
            {RESOURCES.map(item => <ColLink key={item}>{item}</ColLink>)}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: '#4b5563', fontSize: 12 }}>
            © 2026 AcceleratorX. All rights reserved. Registered trademark of A2M Technologies Pvt. Ltd.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['PRIVACY', 'TERMS', 'BUILT FOR THE FUTURE OF AI'].map((item, i) => (
              <button key={item} style={{ color: '#4b5563', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', background: 'none', border: 'none', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.color = '#9ca3af'}
                onMouseLeave={e => e.currentTarget.style.color = '#4b5563'}
              >{item}</button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
