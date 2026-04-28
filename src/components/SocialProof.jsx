import React from 'react'

function personSvg({ bg1, bg2, skin = '#c8956a', hair = '#1a0804', jacket = '#1e3a5f', female = false }) {
  const hairPath = female
    ? `<path d="M125 148 Q132 88 200 84 Q268 88 275 148 Q258 118 200 115 Q142 118 125 148 Q118 205 128 255 Q140 195 200 188 Q260 195 272 255 Q282 205 275 148Z" fill="${hair}"/>`
    : `<path d="M130 155 Q138 96 200 92 Q262 96 270 155 Q254 128 200 126 Q146 128 130 155Z" fill="${hair}"/>`

  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600">`,
    `<defs>`,
    `<linearGradient id="g" x1="0" y1="0" x2="0" y2="1">`,
    `<stop offset="0%" stop-color="${bg1}"/>`,
    `<stop offset="100%" stop-color="${bg2}"/>`,
    `</linearGradient>`,
    `<radialGradient id="gl" cx="50%" cy="45%" r="65%">`,
    `<stop offset="0%" stop-color="${bg1}" stop-opacity="0.5"/>`,
    `<stop offset="100%" stop-color="transparent"/>`,
    `</radialGradient>`,
    `</defs>`,
    `<rect width="400" height="600" fill="url(#g)"/>`,
    `<ellipse cx="200" cy="350" rx="220" ry="280" fill="url(#gl)"/>`,
    `<circle cx="200" cy="170" r="72" fill="${skin}"/>`,
    hairPath,
    `<ellipse cx="180" cy="168" rx="7" ry="8" fill="#2d1408"/>`,
    `<ellipse cx="220" cy="168" rx="7" ry="8" fill="#2d1408"/>`,
    `<circle cx="182" cy="166" r="2.5" fill="#fff" opacity="0.9"/>`,
    `<circle cx="222" cy="166" r="2.5" fill="#fff" opacity="0.9"/>`,
    `<path d="M188 190 Q200 200 212 190" stroke="#a0694a" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    `<rect x="183" y="238" width="34" height="22" fill="${skin}"/>`,
    `<path d="M72 260 Q72 250 108 242 L183 260 L200 276 L217 260 L292 242 Q328 250 328 260 L348 600 H52Z" fill="#f0f4f8"/>`,
    `<path d="M181 242 L200 276 L219 242 L210 234 L200 250 L190 234Z" fill="#e2e8f0"/>`,
    `<path d="M72 260 Q42 288 50 375 L84 363 Q78 318 96 282Z" fill="${jacket}"/>`,
    `<path d="M328 260 Q358 288 350 375 L316 363 Q322 318 304 282Z" fill="${jacket}"/>`,
    `<path d="M52 600 Q62 500 84 363 L116 352 Q98 500 100 600Z" fill="${jacket}" opacity="0.7"/>`,
    `<path d="M348 600 Q338 500 316 363 L284 352 Q302 500 300 600Z" fill="${jacket}" opacity="0.7"/>`,
    `</svg>`,
  ].join('')

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

const PEOPLE = [
  {
    name: 'Shivam Jha', title: 'Data Engineer', company: 'Caparo Engineering India Ltd',
    bg1: '#1e3a8a', bg2: '#060c1e', jacket: '#1e3a5f', skin: '#c8956a', hair: '#1a0804',
    accent: '#3b82f6',
    quote: 'An eye-opening journey that bridged data analytics learning with real-world business application.',
  },
  {
    name: 'Sourabh Kalra', title: 'HR Analyst', company: 'Rajesh Chetan Insurance Brokers Pvt Ltd',
    bg1: '#581c87', bg2: '#100520', jacket: '#581c87', skin: '#a07850', hair: '#3d1a0a',
    accent: '#a855f7',
    quote: 'Built ContextForge — a web app that transforms average prompts into high-performing, context-rich instructions.',
  },
  {
    name: 'Srikant Pandey', title: 'AI QA Engineering Lead', company: 'TO THE NEW',
    bg1: '#064e3b', bg2: '#001408', jacket: '#064e3b', skin: '#b89070', hair: '#2d1408',
    accent: '#10b981',
    quote: 'Built Rasa AI to simplify personalized nutrition turning complex meal planning into an intelligent, adaptive experience.',
  },
  {
    name: 'Nikhil D', title: 'Associate PM', company: 'EdTech Startup',
    bg1: '#92400e', bg2: '#180800', jacket: '#92400e', skin: '#d4a574', hair: '#1a0804',
    accent: '#f59e0b',
    quote: 'Helped medium-sized businesses launch and scale their digital products with AI-first thinking.',
  },
  {
    name: 'Priya Sharma', title: 'AI Product Manager', company: 'Razorpay',
    bg1: '#1e3a8a', bg2: '#080e1e', jacket: '#1e3a5f', skin: '#c8a070', hair: '#3d1a0a', female: true,
    accent: '#60a5fa',
    quote: 'Understood how AI systems actually work from agents and workflows to production-ready builds.',
  },
  {
    name: 'Harshitha SR', title: 'Software Engineering Trainee', company: 'Excelsoft Technologies',
    bg1: '#065f46', bg2: '#001810', jacket: '#065f46', skin: '#b87858', hair: '#2d1408', female: true,
    accent: '#34d399',
    quote: 'I started my career as a Software Engineer. After a long break, I came back not to catch up, but to create what the future will run on.',
  },
  {
    name: 'Arjun Mehta', title: 'Senior ML Engineer', company: 'Google',
    bg1: '#1e3a8a', bg2: '#060e1e', jacket: '#1e3a5f', skin: '#c8956a', hair: '#1a0804',
    accent: '#7c3aed',
    quote: 'From idea to interface — delivered my first end-to-end AI product and applied it on real products in record time.',
  },
  {
    name: 'Arun Karthik', title: 'Digital Marketing Intern', company: 'VMax Wellness',
    bg1: '#6d28d9', bg2: '#100820', jacket: '#6d28d9', skin: '#c8956a', hair: '#2d1408',
    accent: '#c084fc',
    quote: 'I enjoy analyzing markets, understanding consumer behavior, and transforming insights into impactful marketing strategies.',
  },
  {
    name: 'Dhruv Dave', title: 'Prompt Engineer', company: 'Alight Technologies',
    bg1: '#1e3a8a', bg2: '#050d1a', jacket: '#1e3a5f', skin: '#d4a574', hair: '#2d1408',
    accent: '#38bdf8',
    quote: 'Understood how AI systems actually work from agents and workflows to production-ready builds.',
  },
  {
    name: 'Kamayani Chaliki', title: 'Founder', company: 'Skinbuddy',
    bg1: '#4c1d95', bg2: '#0e0518', jacket: '#4c1d95', skin: '#c8a070', hair: '#1a0804', female: true,
    accent: '#e879f9',
    quote: 'Built Rasa AI to simplify personalized nutrition turning complex meal planning into an intelligent, adaptive experience.',
  },
  {
    name: 'Abrar Shaikh', title: 'Payroll Specialist', company: 'UKG',
    bg1: '#065f46', bg2: '#001810', jacket: '#065f46', skin: '#b89070', hair: '#2d1408',
    accent: '#6ee7b7',
    quote: 'Experience over 4 years spread across service outsourcing operations and international one call resolution.',
  },
  {
    name: 'Raghul Balaji', title: 'Content Developer', company: 'Ments',
    bg1: '#7f1d1d', bg2: '#1a0404', jacket: '#7f1d1d', skin: '#c8956a', hair: '#1a0804',
    accent: '#f87171',
    quote: 'From idea to interface — delivered my first Content and applied it on products in real time.',
  },
  {
    name: 'Biswajit Pradhan', title: 'Frontend Developer', company: 'Infosys',
    bg1: '#1e3a8a', bg2: '#060c1e', jacket: '#1e3a5f', skin: '#b89070', hair: '#1a0804',
    accent: '#818cf8',
    quote: 'Built Classmate.io — a comprehensive product for early age students, professionals and aspirants.',
  },
  {
    name: 'Bhagyashree K.', title: 'Data Analyst', company: 'Netflix Project',
    bg1: '#831843', bg2: '#1a0410', jacket: '#831843', skin: '#d4a574', hair: '#3d1a0a', female: true,
    accent: '#fb7185',
    quote: 'Built an interactive Power BI dashboard to analyze Netflix movies and series with real-world insights.',
  },
]

const ROW1 = PEOPLE.slice(0, 7)
const ROW2 = PEOPLE.slice(7)

function PersonCard({ person }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 320,
        borderRadius: 16,
        background: 'linear-gradient(145deg, #0d1117 0%, #0f1623 100%)',
        border: `1px solid ${hovered ? person.accent + '88' : 'rgba(255,255,255,0.08)'}`,
        boxShadow: hovered ? `0 0 18px 2px ${person.accent}44, inset 0 0 12px 0 ${person.accent}11` : 'none',
        padding: '22px 22px 24px',
        flexShrink: 0,
        marginRight: 20,
        boxSizing: 'border-box',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
        cursor: 'default',
      }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          overflow: 'hidden', flexShrink: 0,
          border: `2px solid ${person.accent}66`,
        }}>
          <img
            src={personSvg(person)}
            alt={person.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
          />
        </div>
        <div style={{ fontWeight: 700, fontSize: 16, color: '#f9fafb', lineHeight: 1.3 }}>{person.name}</div>
      </div>

      <div style={{
        display: 'inline-flex', alignItems: 'center',
        border: `1px solid ${person.accent}44`,
        borderRadius: 20, padding: '5px 13px',
        marginBottom: 16,
        maxWidth: '100%', overflow: 'hidden',
      }}>
        <span style={{ fontSize: 11, color: person.accent, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {person.title} @ {person.company}
        </span>
      </div>

      <p style={{
        fontSize: 14, color: '#9ca3af', lineHeight: 1.7, margin: 0,
        display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
      }}>
        {person.quote}
      </p>
    </div>
  )
}

function MarqueeRow({ people, reverse = false }) {
  const doubled = [...people, ...people]
  return (
    <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, black 4%, black 96%, transparent)' }}>
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: `${reverse ? 'tickerRev' : 'ticker'} 40s linear infinite`,
        willChange: 'transform',
      }}>
        {doubled.map((person, i) => (
          <PersonCard key={i} person={person} />
        ))}
      </div>
    </div>
  )
}

export default function SocialProof() {
  return (
    <section style={{ background: '#070910', padding: '88px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: 56, padding: '0 24px' }}>
        <h2 style={{ color: '#fff', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 14 }}>
          2700+ Success Stories
        </h2>
        <p style={{ color: '#6b7280', fontSize: 16, maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
          Professionals like you are already making the shift. Hear directly from our learners who transitioned into an AI-led career.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <MarqueeRow people={ROW1} reverse={false} />
        <MarqueeRow people={ROW2} reverse={true} />
      </div>
    </section>
  )
}
