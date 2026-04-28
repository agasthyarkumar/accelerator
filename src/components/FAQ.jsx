import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: 'What is AcceleratorX, and how is it different from other AI courses?', a: 'AcceleratorX is India\'s #1 AI career platform focused on real, project-based learning. Unlike traditional courses, we combine live sessions with industry practitioners, hands-on projects, and dedicated placement support — so you graduate with a portfolio, not just a certificate.' },
  { q: 'Which is the best AI course in India for working professionals?', a: 'Our AI Product Management, Generative AI, and Data Science programs are top-rated for working professionals. All programs run on weekends so you can upskill without leaving your job.' },
  { q: 'Can I learn AI or data analytics without coding?', a: 'Yes. Our AI Digital Marketing, AI Product Management, and Business AI Strategy programs require zero coding. For technical programs, we provide pre-course prep to get you up to speed.' },
  { q: 'What are the career opportunities after completing AcceleratorX AI courses?', a: 'Graduates go on to roles like AI Product Manager, Data Analyst, ML Engineer, GenAI Developer, and AI Marketing Lead at companies like Google, Microsoft, Flipkart, Swiggy, and Razorpay.' },
  { q: 'How can I switch my career to AI or data and analytics?', a: 'Start with a free consultation with our admissions team. We\'ll map your current skills to the right program, help you build a portfolio of real AI projects, and connect you to 1,700+ hiring partners through our placement network.' },
]

function FAQItem({ item, open, onToggle }) {
  return (
    <div style={{ borderRadius: 14, border: `1px solid ${open ? 'rgba(37,99,235,0.3)' : 'rgba(255,255,255,0.08)'}`, overflow: 'hidden', transition: 'border-color 0.2s', marginBottom: 12 }}>
      <button onClick={onToggle} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
      }}>
        <span style={{ color: '#e5e7eb', fontWeight: 600, fontSize: 15, flex: 1, paddingRight: 16, lineHeight: 1.4 }}>{item.q}</span>
        <div style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: open ? '#2563eb' : 'transparent', transition: 'background 0.2s' }}>
          {open
            ? <Minus style={{ width: 14, height: 14, color: '#fff' }} />
            : <Plus style={{ width: 14, height: 14, color: '#9ca3af' }} />}
        </div>
      </button>
      {open && (
        <div style={{ padding: '0 24px 20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ color: '#6b7280', lineHeight: 1.7, fontSize: 14, margin: '16px 0 0' }}>{item.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section style={{ background: '#070910', padding: '88px 0' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 12 }}>
            FAQs
          </h2>
        </div>

        <div>
          {faqs.map((item, i) => (
            <FAQItem
              key={i} item={item}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>

        <div style={{ textAlign: 'right', marginTop: 20 }}>
          <button style={{ color: '#9ca3af', fontSize: 14, background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500 }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
          >View more →</button>
        </div>
      </div>
    </section>
  )
}
