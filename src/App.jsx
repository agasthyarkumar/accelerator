import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import SocialProof from './components/SocialProof'
import CareerSection from './components/CareerSection'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import JobsPage from './components/JobsPage'
import AuthPage from './components/AuthPage'

function HomePage({ onNav }) {
  return (
    <>
      <Hero onNav={onNav} />
      <Programs />
      <SocialProof />
      <CareerSection />
      <FAQ />
      <CTA onNav={onNav} />
    </>
  )
}

export default function App() {
  const [page, setPage] = useState('home')

  const handleNav = (section) => {
    setPage(section)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (page) {
      case 'home':       return <HomePage onNav={handleNav} />
      case 'programs':   return <HomePage onNav={handleNav} />
      case 'about':      return <AboutPage />
      case 'blog':       return <BlogPage />
      case 'jobs-portal': return <JobsPage />
      case 'signin':     return <AuthPage mode="signin" onNav={handleNav} />
      case 'register':   return <AuthPage mode="register" onNav={handleNav} />
      default:           return <HomePage onNav={handleNav} />
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar onNav={handleNav} />
      <main>{renderPage()}</main>
      {!['signin', 'register'].includes(page) && <Footer />}
    </div>
  )
}
