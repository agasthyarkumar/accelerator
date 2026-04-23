import { Target, Heart, Lightbulb, Users } from 'lucide-react'

const values = [
  { icon: Target, title: 'Outcome-First', desc: 'Every curriculum decision is made with one question: does this get our students hired faster?' },
  { icon: Lightbulb, title: 'Practical Over Theoretical', desc: 'We build practitioners, not theorists. Every concept is taught through real problems and live projects.' },
  { icon: Heart, title: 'Community Always', desc: 'Learning alone is hard. Our cohort model and alumni network ensure no one walks the journey by themselves.' },
  { icon: Users, title: 'Industry-Led', desc: 'Our mentors are active practitioners at top companies — not professional trainers removed from real work.' },
]

const team = [
  { name: 'Anika Verma', role: 'CEO & Co-founder', prev: 'Ex-Google PM', avatar: 'AV', color: 'from-blue-500 to-blue-700' },
  { name: 'Rohan Kapoor', role: 'CTO & Co-founder', prev: 'Ex-Amazon SDE', avatar: 'RK', color: 'from-purple-500 to-purple-700' },
  { name: 'Meera Iyer', role: 'Head of Curriculum', prev: 'Ex-Microsoft DS', avatar: 'MI', color: 'from-green-500 to-emerald-700' },
  { name: 'Dev Bhatia', role: 'Head of Placements', prev: 'Ex-McKinsey', avatar: 'DB', color: 'from-orange-500 to-red-600' },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black text-gray-900 mb-6">
            We're on a Mission to <span className="gradient-text">10x India's AI Workforce</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded in 2022, AccelerateAI was born from frustration: too many talented professionals
            were using AI as passive consumers when they had the potential to build with it. We set out
            to change that — one cohort at a time.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 border border-gray-100 rounded-2xl hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(m => (
              <div key={m.name} className="bg-white rounded-2xl p-6 text-center border border-gray-100 card-hover">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white text-xl font-bold mx-auto mb-4`}>
                  {m.avatar}
                </div>
                <div className="font-bold text-gray-900">{m.name}</div>
                <div className="text-sm text-blue-600 font-medium">{m.role}</div>
                <div className="text-xs text-gray-500 mt-1">{m.prev}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
