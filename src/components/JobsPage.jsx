import { MapPin, Clock, DollarSign, Building2, Search, SlidersHorizontal } from 'lucide-react'

const jobs = [
  { title: 'AI Product Manager', company: 'Razorpay', location: 'Bengaluru', type: 'Full-time', salary: '₹22–32 LPA', domain: 'AI/ML', color: 'bg-blue-100 text-blue-700', hot: true },
  { title: 'Senior ML Engineer', company: 'Google India', location: 'Hyderabad', type: 'Full-time', salary: '₹35–55 LPA', domain: 'Machine Learning', color: 'bg-purple-100 text-purple-700', hot: true },
  { title: 'Data Scientist', company: 'Swiggy', location: 'Bengaluru', type: 'Full-time', salary: '₹18–28 LPA', domain: 'Data Science', color: 'bg-green-100 text-green-700', hot: false },
  { title: 'GenAI Developer', company: 'Microsoft', location: 'Noida', type: 'Full-time', salary: '₹28–40 LPA', domain: 'Generative AI', color: 'bg-orange-100 text-orange-700', hot: true },
  { title: 'AI Marketing Lead', company: 'Nykaa', location: 'Mumbai', type: 'Full-time', salary: '₹16–24 LPA', domain: 'AI Marketing', color: 'bg-pink-100 text-pink-700', hot: false },
  { title: 'Data Analyst', company: 'Zepto', location: 'Mumbai', type: 'Full-time', salary: '₹12–18 LPA', domain: 'Analytics', color: 'bg-teal-100 text-teal-700', hot: false },
  { title: 'AI Business Consultant', company: 'Deloitte', location: 'Delhi', type: 'Full-time', salary: '₹30–45 LPA', domain: 'Business AI', color: 'bg-indigo-100 text-indigo-700', hot: true },
  { title: 'LLM Research Engineer', company: 'Sarvam AI', location: 'Remote', type: 'Full-time', salary: '₹25–38 LPA', domain: 'Generative AI', color: 'bg-purple-100 text-purple-700', hot: true },
  { title: 'AI Product Analyst', company: 'PhonePe', location: 'Bengaluru', type: 'Full-time', salary: '₹14–22 LPA', domain: 'AI/ML', color: 'bg-blue-100 text-blue-700', hot: false },
]

export default function JobsPage() {
  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-gray-900 to-blue-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black text-white mb-4">
            AI Jobs <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portal</span>
          </h1>
          <p className="text-gray-400 text-xl mb-8">
            Exclusive job listings from our 1,700+ hiring partner companies — curated for AccelerateAI alumni.
          </p>

          {/* Search bar */}
          <div className="flex gap-3 max-w-2xl mx-auto">
            <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3">
              <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search jobs, companies, or skills..."
                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-500 transition-colors">
              <SlidersHorizontal className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 font-medium">{jobs.length} open positions</p>
          <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 outline-none">
            <option>Sort: Most Recent</option>
            <option>Sort: Highest Salary</option>
            <option>Sort: Best Match</option>
          </select>
        </div>

        <div className="space-y-4">
          {jobs.map(j => (
            <div key={j.title + j.company} className="card-hover bg-white rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-gray-500" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">{j.title}</h3>
                  {j.hot && (
                    <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">🔥 Hot</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5" />{j.company}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{j.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{j.type}</span>
                  <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" />{j.salary}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                <span className={`${j.color} text-xs font-semibold px-3 py-1.5 rounded-full`}>{j.domain}</span>
                <button className="bg-gray-900 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-blue-600 transition-colors">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Are you a hiring company?</h3>
          <p className="text-gray-600 mb-4">Post your AI roles and connect with 2,700+ pre-vetted AccelerateAI graduates.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  )
}
