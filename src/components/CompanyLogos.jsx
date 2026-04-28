const COMPANIES = ['TCS', 'IBM', 'SBI', 'Bank of America', 'Zepto', 'Mirai Labs', 'EXL', 'Infosys', 'Wipro', 'HCL', 'Deloitte', 'Microsoft']

const COLORS = {
  TCS: '#c41e3a', IBM: '#1f70c1', SBI: '#22c55e',
  'Bank of America': '#dc2626', Zepto: '#a855f7',
  'Mirai Labs': '#f59e0b', EXL: '#ef4444',
  Infosys: '#0d5c9e', Wipro: '#2563eb', HCL: '#00a651',
  Deloitte: '#86c232', Microsoft: '#00a4ef',
}

export default function CompanyLogos() {
  const doubled = [...COMPANIES, ...COMPANIES]
  return (
    <section style={{ background: '#0a0a0f', padding: '64px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center', marginBottom: 32 }}>
        <h2 style={{ color: '#fff', fontSize: 'clamp(22px,3vw,38px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 10 }}>
          Our Alumni Are Working Across 1700+ Top MNCs
        </h2>
        <p style={{ color: '#6b7280', fontSize: 15, maxWidth: 600, margin: '0 auto' }}>
          Get hired in AI, product, marketing, and data roles. AcceleratorX AI courses are trusted by 1700+ companies globally.
        </p>
      </div>

      <div style={{ maxWidth: 700, margin: '0 auto', overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
        <div style={{ display: 'flex', width: 'max-content', alignItems: 'center', animation: 'tickerRev 20s linear infinite', willChange: 'transform' }}>
          {doubled.map((co, i) => (
            <span key={i} style={{
              fontSize: 'clamp(18px,2vw,26px)', fontWeight: 900,
              color: COLORS[co] || '#fff',
              opacity: 0.75,
              letterSpacing: '-0.02em',
              flexShrink: 0,
              fontFamily: 'system-ui, sans-serif',
              marginRight: 48,
            }}>{co}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
