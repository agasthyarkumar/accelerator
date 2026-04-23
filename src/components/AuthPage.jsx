import { useState } from 'react'
import { Zap, Eye, EyeOff } from 'lucide-react'

export default function AuthPage({ mode, onNav }) {
  const [isLogin, setIsLogin] = useState(mode === 'signin')
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', program: '' })

  const programs = [
    'AI Product Management', 'Generative AI for Developers', 'Data Science & ML',
    'Data Analytics', 'AI-Powered Digital Marketing', 'Business AI Strategy',
  ]

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-12">
      <div className="w-full max-w-md mx-4">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <button onClick={() => onNav('home')} className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">AccelerateAI</span>
            </button>
            <h1 className="text-2xl font-black text-gray-900">
              {isLogin ? 'Welcome Back' : 'Start Your AI Journey'}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {isLogin ? 'Sign in to continue your learning' : 'Join 2,700+ AI professionals'}
            </p>
          </div>

          {/* Toggle */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-colors ${isLogin ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-colors ${!isLogin ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}
            >
              Register
            </button>
          </div>

          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Arjun Mehta"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
            )}

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Program of Interest</label>
                <select
                  value={form.program}
                  onChange={e => setForm({ ...form, program: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                >
                  <option value="">Select a program...</option>
                  {programs.map(p => <option key={p}>{p}</option>)}
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-base hover:bg-blue-700 transition-colors mt-2"
            >
              {isLogin ? 'Sign In' : 'Create Account — Free'}
            </button>
          </form>

          {isLogin && (
            <div className="text-center mt-4">
              <button className="text-sm text-blue-600 hover:underline">Forgot password?</button>
            </div>
          )}

          <div className="text-center mt-6 text-sm text-gray-500">
            {isLogin ? "Don't have an account? " : "Already enrolled? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 font-semibold hover:underline"
            >
              {isLogin ? 'Register free' : 'Sign in'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
