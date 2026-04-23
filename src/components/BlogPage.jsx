import { Clock, ArrowRight } from 'lucide-react'

const posts = [
  {
    tag: 'AI Careers',
    tagColor: 'bg-blue-100 text-blue-700',
    title: 'The 7 AI Skills Hiring Managers Are Desperate For in 2025',
    excerpt: 'We surveyed 200 hiring managers across top tech companies to find out exactly what AI skills are hardest to hire for — and how you can stand out.',
    author: 'Anika Verma',
    date: 'Apr 12, 2025',
    readTime: '6 min read',
    emoji: '🎯',
    bg: 'from-blue-400 to-blue-600',
  },
  {
    tag: 'Generative AI',
    tagColor: 'bg-purple-100 text-purple-700',
    title: 'RAG vs Fine-tuning: When to Use Which (With Real Examples)',
    excerpt: 'Two of the most powerful GenAI techniques, but most teams use the wrong one. Here\'s a practical decision framework with production case studies.',
    author: 'Rohan Kapoor',
    date: 'Apr 8, 2025',
    readTime: '9 min read',
    emoji: '🤖',
    bg: 'from-purple-400 to-purple-600',
  },
  {
    tag: 'Data Science',
    tagColor: 'bg-green-100 text-green-700',
    title: 'How to Build a Portfolio That Gets You Hired as a Data Scientist',
    excerpt: 'Stop building Titanic survival models. Here\'s what a portfolio that actually impresses hiring managers looks like, with real examples from our alumni.',
    author: 'Meera Iyer',
    date: 'Apr 2, 2025',
    readTime: '7 min read',
    emoji: '📊',
    bg: 'from-green-400 to-emerald-600',
  },
  {
    tag: 'AI Marketing',
    tagColor: 'bg-pink-100 text-pink-700',
    title: 'I Used AI to Run a Full Marketing Campaign — Here\'s What Happened',
    excerpt: 'A 30-day experiment using only AI tools to plan, create, and execute a digital marketing campaign for a real product. The results surprised everyone.',
    author: 'Kavya Pillai',
    date: 'Mar 27, 2025',
    readTime: '8 min read',
    emoji: '📣',
    bg: 'from-pink-400 to-rose-600',
  },
  {
    tag: 'Career Advice',
    tagColor: 'bg-orange-100 text-orange-700',
    title: 'From ₹9 LPA to ₹26 LPA: My AccelerateAI Journey',
    excerpt: 'One year ago I was a mid-level marketer scared of losing my job to AI. Today I lead AI strategy at a Series C startup. This is exactly what changed.',
    author: 'Priya Sharma',
    date: 'Mar 20, 2025',
    readTime: '5 min read',
    emoji: '🚀',
    bg: 'from-orange-400 to-amber-600',
  },
  {
    tag: 'Industry Trends',
    tagColor: 'bg-teal-100 text-teal-700',
    title: 'The State of AI Jobs in India: 2025 Report',
    excerpt: 'We analysed 50,000 job postings across Naukri, LinkedIn, and direct company sites to map exactly where AI jobs are growing — and where they\'re not.',
    author: 'Dev Bhatia',
    date: 'Mar 14, 2025',
    readTime: '12 min read',
    emoji: '📈',
    bg: 'from-teal-400 to-cyan-600',
  },
]

export default function BlogPage() {
  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            The AI Career <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-600">
            Practical insights on AI skills, careers, and industry trends — from practitioners, not observers.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(p => (
            <article key={p.title} className="card-hover bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col">
              <div className={`h-32 bg-gradient-to-br ${p.bg} flex items-center justify-center text-5xl`}>
                {p.emoji}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className={`${p.tagColor} text-xs font-bold px-3 py-1 rounded-full self-start mb-3`}>
                  {p.tag}
                </span>
                <h2 className="font-bold text-gray-900 mb-2 leading-snug">{p.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">{p.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-4 border-t border-gray-100">
                  <span>{p.author} · {p.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {p.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-colors">
            Load More Articles <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
