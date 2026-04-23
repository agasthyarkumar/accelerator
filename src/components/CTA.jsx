import { ArrowRight, Zap } from 'lucide-react'

export default function CTA({ onNav }) {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Zap className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
          Your AI Career Starts{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Today
          </span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Join 2,700+ professionals who chose to build the future instead of just using it. Applications for the next cohort close soon.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button
            onClick={() => onNav('register')}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition-colors"
          >
            Apply Now — It's Free <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => onNav('programs')}
            className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:text-white transition-colors"
          >
            Browse Programs
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          {['No upfront fees to apply', '7-day money-back guarantee', 'Placement support included', 'Start any weekend'].map(t => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
