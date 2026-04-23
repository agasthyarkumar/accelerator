import { ArrowRight, Clock, Users, BarChart2, Code2, Megaphone, Brain, DollarSign, TrendingUp } from 'lucide-react'

const programs = [
  {
    icon: Brain,
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    badge: 'Most Popular',
    badgeColor: 'bg-blue-600',
    title: 'AI Product Management',
    desc: 'Master building and shipping AI-powered products. Go from idea to launch using modern AI tools and frameworks.',
    duration: '16 weeks',
    level: 'Intermediate',
    salary: '₹22 LPA avg',
    skills: ['Product Strategy', 'LLM Integration', 'Roadmapping', 'A/B Testing'],
    audience: 'PMs & Aspiring PMs',
  },
  {
    icon: Code2,
    color: 'from-purple-500 to-purple-700',
    bg: 'bg-purple-50',
    badge: 'New',
    badgeColor: 'bg-purple-600',
    title: 'Generative AI for Developers',
    desc: 'Build production-grade GenAI applications with LangChain, RAG pipelines, fine-tuning, and deployment.',
    duration: '20 weeks',
    level: 'Advanced',
    salary: '₹28 LPA avg',
    skills: ['LangChain', 'RAG', 'Fine-tuning', 'Vector DBs'],
    audience: 'Software Developers',
  },
  {
    icon: BarChart2,
    color: 'from-green-500 to-emerald-700',
    bg: 'bg-green-50',
    badge: null,
    badgeColor: '',
    title: 'Data Science & ML',
    desc: 'End-to-end machine learning: from data wrangling and feature engineering to deploying production ML models.',
    duration: '24 weeks',
    level: 'Beginner to Advanced',
    salary: '₹20 LPA avg',
    skills: ['Python', 'ML Algorithms', 'MLOps', 'Deep Learning'],
    audience: 'Graduates & Analysts',
  },
  {
    icon: TrendingUp,
    color: 'from-orange-500 to-red-600',
    bg: 'bg-orange-50',
    badge: null,
    badgeColor: '',
    title: 'Data Analytics',
    desc: 'Turn raw data into business decisions with SQL, dashboards, and AI-assisted analytics workflows.',
    duration: '12 weeks',
    level: 'Beginner',
    salary: '₹14 LPA avg',
    skills: ['SQL', 'Tableau', 'Python', 'Business Insights'],
    audience: 'Business Professionals',
  },
  {
    icon: Megaphone,
    color: 'from-pink-500 to-rose-700',
    bg: 'bg-pink-50',
    badge: 'High Demand',
    badgeColor: 'bg-pink-600',
    title: 'AI-Powered Digital Marketing',
    desc: 'Use AI tools to create content, run campaigns, and analyse performance at scale — grow brands faster.',
    duration: '10 weeks',
    level: 'Beginner',
    salary: '₹12 LPA avg',
    skills: ['ChatGPT for Marketing', 'SEO AI', 'Ad Automation', 'Analytics'],
    audience: 'Marketers & Founders',
  },
  {
    icon: DollarSign,
    color: 'from-teal-500 to-cyan-700',
    bg: 'bg-teal-50',
    badge: null,
    badgeColor: '',
    title: 'Business AI Strategy',
    desc: 'Lead AI transformation in your organisation. Build AI roadmaps, manage budgets, and drive ROI.',
    duration: '8 weeks',
    level: 'Senior Professional',
    salary: '₹35 LPA avg',
    skills: ['AI Governance', 'Change Management', 'ROI Modeling', 'Ethics'],
    audience: 'Managers & CXOs',
  },
]

function ProgramCard({ program }) {
  const Icon = program.icon
  return (
    <div className={`card-hover bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col`}>
      <div className={`p-6 ${program.bg}`}>
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          {program.badge && (
            <span className={`${program.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
              {program.badge}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{program.desc}</p>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {program.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {program.audience}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {program.skills.map(s => (
            <span key={s} className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">{s}</span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500">Avg Package</div>
            <div className="text-lg font-black text-gray-900">{program.salary}</div>
          </div>
          <button className="flex items-center gap-1.5 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Our Programs</span>
          <h2 className="text-4xl font-black text-gray-900 mt-2 mb-4">
            Find Your <span className="gradient-text">AI Career Path</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Industry-designed curricula with live mentorship, real projects, and dedicated placement support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(p => <ProgramCard key={p.title} program={p} />)}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-colors">
            View All Programs <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
