import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  )
}
