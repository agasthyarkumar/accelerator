import { useState } from 'react'
import { ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react'
import Logo from './Logo'

const PROGRAMS = [
  'AI Product Management', 'Generative AI & AI Agents',
  'Advanced Generative AI', 'AI Data Science',
  'AI Data Analytics', 'AI Digital Marketing',
]
const PLATFORMS = ['BuildrX — Project Platform', 'AI Career Roadmap', 'Community Hub']

function NavBtn({ children, onClick }) {
  return (
    <button onClick={onClick}
      style={{ color: '#9ca3af', fontWeight: 500, fontSize: 14, background: 'none', border: 'none', cursor: 'pointer' }}
      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
      onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
    >{children}</button>
  )
}

function DropMenu({ label, items, open, setOpen, onSelect }) {
  return (
    <div style={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#9ca3af', fontWeight: 500, fontSize: 14, background: 'none', border: 'none', cursor: 'pointer' }}
        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
        onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
      >
        {label} <ChevronDown style={{ width: 14, height: 14 }} />
      </button>
      {open && (
        <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, minWidth: 230, background: '#0f1117', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '6px 0', boxShadow: '0 24px 48px rgba(0,0,0,0.8)', zIndex: 60 }}>
          {items.map(item => (
            <button key={item} onClick={() => onSelect(item)}
              style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 16px', fontSize: 13, color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(37,99,235,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.background = 'none' }}
            >{item}</button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar({ onNav }) {
  const [progOpen, setProgOpen] = useState(false)
  const [platOpen, setPlatOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const nav = (s) => { onNav(s); setProgOpen(false); setPlatOpen(false); setMobileOpen(false) }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(4,4,8,0.97)', backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

        <button onClick={() => nav('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <Logo dark size="md" />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 28 }}>
          <DropMenu label="Programs" items={PROGRAMS} open={progOpen} setOpen={setProgOpen} onSelect={() => nav('programs')} />
          <NavBtn onClick={() => nav('about')}>About</NavBtn>
          <NavBtn onClick={() => nav('blog')}>Blog</NavBtn>
          <NavBtn onClick={() => nav('jobs-portal')}>Jobs Portal</NavBtn>
          <DropMenu label="Our Platforms" items={PLATFORMS} open={platOpen} setOpen={setPlatOpen} onSelect={() => {}} />
        </div>

        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 12 }}>
          <NavBtn onClick={() => nav('signin')}>Log In</NavBtn>
          <button onClick={() => nav('register')} style={{
            display: 'flex', alignItems: 'center', gap: 6,
            background: '#2563eb', color: '#fff', padding: '8px 18px',
            borderRadius: 8, fontWeight: 600, fontSize: 14, border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#1d4ed8'}
            onMouseLeave={e => e.currentTarget.style.background = '#2563eb'}
          >Sign Up <ArrowUpRight style={{ width: 14, height: 14 }} /></button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 4 }}>
          {mobileOpen ? <X style={{ width: 22, height: 22 }} /> : <Menu style={{ width: 22, height: 22 }} />}
        </button>
      </div>

      {mobileOpen && (
        <div style={{ background: '#0a0a0f', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '12px 24px 20px' }}>
          {['programs', 'about', 'blog', 'jobs-portal'].map(s => (
            <button key={s} onClick={() => nav(s)}
              style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 0', color: '#d1d5db', fontSize: 15, fontWeight: 500, background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}>
              {s.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
            </button>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
            <button onClick={() => nav('signin')}
              style={{ flex: 1, padding: '10px 0', borderRadius: 8, border: '1px solid rgba(255,255,255,0.15)', color: '#fff', background: 'none', fontWeight: 600, cursor: 'pointer' }}>Log In</button>
            <button onClick={() => nav('register')}
              style={{ flex: 1, padding: '10px 0', borderRadius: 8, background: '#2563eb', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  )
}
