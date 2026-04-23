import { Zap, Globe, Link, Play, Share2 } from 'lucide-react'

const links = {
  Programs: ['AI Product Management', 'Generative AI', 'Data Science', 'Data Analytics', 'AI Marketing', 'Business AI'],
  Company: ['About Us', 'Careers', 'Blog', 'Press', 'Partners', 'Contact'],
  Support: ['Help Center', 'Community', 'Jobs Portal', 'Alumni Network', 'Refer a Friend', 'Privacy Policy'],
}

const socials = [
  { icon: Share2, label: 'Twitter / X' },
  { icon: Link, label: 'LinkedIn' },
  { icon: Play, label: 'YouTube' },
  { icon: Globe, label: 'Website' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AccelerateAI</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              India's leading AI career platform. We turn professionals into AI builders through hands-on, project-based learning and dedicated placement support.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item}>
                    <button className="text-sm hover:text-white transition-colors">{item}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2024 AccelerateAI. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
