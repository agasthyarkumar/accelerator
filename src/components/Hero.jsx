import { ArrowRight, Play, Star, Users, Briefcase, Award } from 'lucide-react'

const badges = [
  { icon: Users, label: '2,700+ Alumni' },
  { icon: Briefcase, label: '1,700+ Hiring Partners' },
  { icon: Award, label: '94% Placement Rate' },
]

export default function Hero({ onNav }) {
  return (
    <section className="hero-gradient pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Star className="w-3.5 h-3.5 fill-blue-500" />
              India's #1 AI Career Platform
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
              Stop Using AI.{' '}
              <span className="gradient-text">Start Building</span>{' '}
              With It.
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Transform from an AI consumer to an AI creator. Join industry-led programs that teach you to build real products, land top jobs, and lead the AI revolution.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => onNav('programs')}
                className="flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                Explore Programs <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNav('about')}
                className="flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-7 py-3.5 rounded-xl font-semibold text-lg hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                <Play className="w-5 h-5" /> Watch Demo
              </button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-6">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-gray-600">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Central card */}
              <div className="absolute inset-8 bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900 mb-1">₹18 LPA</div>
                  <div className="text-sm text-gray-500 font-medium">Average Salary After</div>
                  <div className="mt-3 flex gap-1 justify-center">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute top-0 left-0 bg-white rounded-2xl shadow-lg px-4 py-3 z-20">
                <div className="text-xs text-gray-500 mb-0.5">Alumni at</div>
                <div className="text-sm font-bold text-gray-800">Google · Amazon · Meta</div>
              </div>

              <div className="absolute bottom-4 right-0 bg-white rounded-2xl shadow-lg px-4 py-3 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Job Offer</div>
                    <div className="text-sm font-bold text-gray-800">Received!</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 bg-purple-600 text-white rounded-2xl shadow-lg px-4 py-3 z-20 -translate-y-1/2">
                <div className="text-xs opacity-80 mb-0.5">Live Projects</div>
                <div className="text-xl font-black">50+</div>
              </div>

              {/* Background circles */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 opacity-60" />
            </div>
          </div>
        </div>

        {/* Company logos bar */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <p className="text-center text-sm text-gray-500 font-medium mb-6">Our alumni work at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale">
            {['Google', 'Amazon', 'Microsoft', 'Meta', 'Flipkart', 'Swiggy', 'Zomato', 'Razorpay'].map(co => (
              <span key={co} className="text-lg font-black text-gray-700 tracking-tight">{co}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
