import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const stats = [
  { value: '2,700+', label: 'Success Stories', sub: 'Graduates placed globally' },
  { value: '1,700+', label: 'Hiring Partners', sub: 'Companies that trust us' },
  { value: '94%', label: 'Placement Rate', sub: 'Within 6 months of graduation' },
  { value: '₹18 LPA', label: 'Avg. Package', sub: 'Across all programs' },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'AI Product Manager',
    company: 'Razorpay',
    avatar: 'PS',
    avatarColor: 'from-blue-500 to-blue-700',
    rating: 5,
    text: "The AI PM program changed my career completely. Within 3 months of graduating I had three offers. The mentors are real practitioners, not just teachers.",
    salary: '₹26 LPA',
    prev: '₹11 LPA',
  },
  {
    name: 'Arjun Mehta',
    role: 'Senior ML Engineer',
    company: 'Google',
    avatar: 'AM',
    avatarColor: 'from-purple-500 to-purple-700',
    rating: 5,
    text: "I had been trying to break into ML for two years. After the Data Science program here, I landed at Google. The project-based approach is unmatched.",
    salary: '₹38 LPA',
    prev: '₹14 LPA',
  },
  {
    name: 'Sneha Reddy',
    role: 'Data Analyst',
    company: 'Swiggy',
    avatar: 'SR',
    avatarColor: 'from-green-500 to-emerald-700',
    rating: 5,
    text: "Fresh graduate, zero experience — now I'm at Swiggy building dashboards that the CEO uses. AccelerateAI's placement team is extraordinary.",
    salary: '₹14 LPA',
    prev: 'Fresher',
  },
  {
    name: 'Rahul Nair',
    role: 'GenAI Developer',
    company: 'Microsoft',
    avatar: 'RN',
    avatarColor: 'from-orange-500 to-red-600',
    rating: 5,
    text: "Best investment I've made in my career. The GenAI curriculum is cutting-edge — I was building RAG systems in week three. Microsoft hired me before I even finished.",
    salary: '₹32 LPA',
    prev: '₹18 LPA',
  },
  {
    name: 'Kavya Pillai',
    role: 'Marketing AI Lead',
    company: 'Flipkart',
    avatar: 'KP',
    avatarColor: 'from-pink-500 to-rose-600',
    rating: 5,
    text: "I was a traditional marketer scared of AI. Now I lead the AI marketing team at Flipkart. The course was practical, fast-paced, and the community is incredible.",
    salary: '₹20 LPA',
    prev: '₹9 LPA',
  },
  {
    name: 'Vikram Singh',
    role: 'Business AI Consultant',
    company: 'Deloitte',
    avatar: 'VS',
    avatarColor: 'from-teal-500 to-cyan-700',
    rating: 5,
    text: "The Business AI Strategy program gave me a framework to talk AI with any C-suite. Deloitte hired me six weeks into the course. Absolutely life-changing.",
    salary: '₹40 LPA',
    prev: '₹22 LPA',
  },
]

function TestimonialCard({ t }) {
  return (
    <div className="testimonial-card flex flex-col h-full">
      <Quote className="w-8 h-8 text-blue-100 mb-3" />
      <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>

      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-sm font-bold`}>
            {t.avatar}
          </div>
          <div>
            <div className="font-bold text-gray-900 text-sm">{t.name}</div>
            <div className="text-xs text-gray-500">{t.role} · {t.company}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400 line-through">{t.prev}</div>
          <div className="text-sm font-black text-green-600">{t.salary}</div>
        </div>
      </div>
    </div>
  )
}

export default function SocialProof() {
  const [page, setPage] = useState(0)
  const perPage = 3
  const pages = Math.ceil(testimonials.length / perPage)
  const visible = testimonials.slice(page * perPage, page * perPage + perPage)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map(s => (
            <div key={s.label} className="stat-card text-center">
              <div className="text-3xl md:text-4xl font-black mb-1">{s.value}</div>
              <div className="font-bold text-blue-100 text-sm mb-0.5">{s.label}</div>
              <div className="text-blue-200 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Success Stories</span>
          <h2 className="text-4xl font-black text-gray-900 mt-2 mb-4">
            Real People, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our graduates don't just get jobs — they transform their careers and their lives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visible.map(t => <TestimonialCard key={t.name} t={t} />)}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            className="p-2 rounded-full border border-gray-200 hover:border-blue-400 disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === page ? 'bg-blue-600' : 'bg-gray-200'}`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage(p => Math.min(pages - 1, p + 1))}
            disabled={page === pages - 1}
            className="p-2 rounded-full border border-gray-200 hover:border-blue-400 disabled:opacity-30 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
