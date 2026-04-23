import { TrendingUp, CheckCircle, ExternalLink } from 'lucide-react'

const salaryData = [
  { role: 'Data Analyst', before: 6, after: 14, color: 'bg-blue-500' },
  { role: 'ML Engineer', before: 12, after: 28, color: 'bg-purple-500' },
  { role: 'AI PM', before: 10, after: 22, color: 'bg-green-500' },
  { role: 'GenAI Dev', before: 14, after: 32, color: 'bg-orange-500' },
  { role: 'AI Marketer', before: 5, after: 15, color: 'bg-pink-500' },
]

const projects = [
  {
    title: 'AI Customer Support Bot',
    tech: ['LangChain', 'GPT-4', 'FastAPI'],
    author: 'Arjun M.',
    domain: 'GenAI',
    color: 'from-blue-500 to-purple-600',
    emoji: '🤖',
  },
  {
    title: 'Real-time Fraud Detection',
    tech: ['Python', 'XGBoost', 'Kafka'],
    author: 'Priya S.',
    domain: 'ML',
    color: 'from-green-500 to-teal-600',
    emoji: '🛡️',
  },
  {
    title: 'AI Marketing Campaign Tool',
    tech: ['Claude API', 'Next.js', 'Supabase'],
    author: 'Kavya P.',
    domain: 'AI Tools',
    color: 'from-pink-500 to-rose-600',
    emoji: '📣',
  },
  {
    title: 'Sales Forecasting Dashboard',
    tech: ['Prophet', 'Plotly', 'Streamlit'],
    author: 'Rahul N.',
    domain: 'Analytics',
    color: 'from-orange-500 to-amber-600',
    emoji: '📈',
  },
]

const careerSupport = [
  'Dedicated placement team for every graduate',
  'Resume & LinkedIn profile review',
  'Mock interviews with industry professionals',
  'Direct referrals to 1,700+ partner companies',
  'Salary negotiation coaching',
  'Alumni network of 2,700+ professionals',
]

export default function CareerSection() {
  const maxSalary = 35

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Salary Chart */}
        <div>
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Career Impact</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 mb-4">
              Watch Your Salary <span className="gradient-text">Skyrocket</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our graduates see an average 2.5x salary jump within 6 months of completing their program.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-6 mb-8 flex-wrap">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-4 h-4 rounded bg-gray-200" />
                <span className="text-gray-600">Before (LPA)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-4 h-4 rounded bg-blue-500" />
                <span className="text-gray-600">After (LPA)</span>
              </div>
              <div className="ml-auto flex items-center gap-1 text-green-600 font-semibold text-sm">
                <TrendingUp className="w-4 h-4" /> Average 2.5x growth
              </div>
            </div>

            <div className="space-y-5">
              {salaryData.map(({ role, before, after, color }) => (
                <div key={role}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-semibold text-gray-700">{role}</span>
                    <span className="text-sm font-bold text-green-600">
                      ₹{before}L → ₹{after}L &nbsp;
                      <span className="text-gray-400 font-normal">(+{Math.round((after/before - 1) * 100)}%)</span>
                    </span>
                  </div>
                  <div className="relative h-5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-gray-300 rounded-full"
                      style={{ width: `${(before / maxSalary) * 100}%` }}
                    />
                    <div
                      className={`absolute left-0 top-0 h-full ${color} rounded-full opacity-80 transition-all duration-700`}
                      style={{ width: `${(after / maxSalary) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Student Projects */}
        <div>
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">BuildRX Portfolio</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 mb-4">
              Real Projects by <span className="gradient-text">Real Students</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Every graduate ships a portfolio of real-world AI projects — this is what employers hire for.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map(p => (
              <div key={p.title} className="card-hover bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className={`h-28 bg-gradient-to-br ${p.color} flex items-center justify-center text-5xl`}>
                  {p.emoji}
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-400 font-medium mb-1">{p.domain}</div>
                  <div className="font-bold text-gray-900 text-sm mb-2">{p.title}</div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {p.tech.map(t => (
                      <span key={t} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-md">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">by {p.author}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Support */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Placement Support</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 mb-6">
              We Don't Stop Until <span className="gradient-text">You're Hired</span>
            </h2>
            <div className="space-y-3">
              {careerSupport.map(item => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              Talk to a Career Advisor
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Days to First Interview', value: '21', color: 'bg-blue-600' },
              { label: 'Companies Actively Hiring', value: '340+', color: 'bg-purple-600' },
              { label: 'Alumni Referrals/Month', value: '180+', color: 'bg-green-600' },
              { label: 'Offer Letters This Year', value: '890+', color: 'bg-orange-600' },
            ].map(({ label, value, color }) => (
              <div key={label} className={`${color} rounded-2xl p-6 text-white text-center`}>
                <div className="text-3xl font-black mb-1">{value}</div>
                <div className="text-sm opacity-80">{label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
