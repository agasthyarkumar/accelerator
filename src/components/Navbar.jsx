import { useState } from 'react'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'

const programs = [
  'AI Product Management',
  'Generative AI for Developers',
  'Data Science & ML',
  'Data Analytics',
  'AI-Powered Digital Marketing',
  'Business AI Strategy',
  'AI for Finance Professionals',
]

export default function Navbar({ onNav }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)

  const handleNav = (section) => {
    onNav(section)
    setMenuOpen(false)
    setProgramsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => handleNav('home')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">AccelerateAI</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* Programs dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-gray-700 font-medium nav-link hover:text-blue-600 transition-colors"
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                Programs <ChevronDown className="w-4 h-4" />
              </button>
              {programsOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                  onMouseEnter={() => setProgramsOpen(true)}
                  onMouseLeave={() => setProgramsOpen(false)}
                >
                  {programs.map((p) => (
                    <button
                      key={p}
                      onClick={() => handleNav('programs')}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {['About', 'Blog', 'Jobs Portal'].map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item.toLowerCase().replace(' ', '-'))}
                className="text-gray-700 font-medium nav-link hover:text-blue-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNav('signin')}
              className="text-gray-700 font-medium hover:text-blue-600 transition-colors px-3 py-1.5"
            >
              Sign In
            </button>
            <button
              onClick={() => handleNav('register')}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <button onClick={() => handleNav('programs')} className="block w-full text-left text-gray-700 font-medium py-2">Programs</button>
          <button onClick={() => handleNav('about')} className="block w-full text-left text-gray-700 font-medium py-2">About</button>
          <button onClick={() => handleNav('blog')} className="block w-full text-left text-gray-700 font-medium py-2">Blog</button>
          <button onClick={() => handleNav('jobs-portal')} className="block w-full text-left text-gray-700 font-medium py-2">Jobs Portal</button>
          <div className="flex gap-3 pt-2">
            <button onClick={() => handleNav('signin')} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-medium">Sign In</button>
            <button onClick={() => handleNav('register')} className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  )
}
