import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import Home from '../pages/Home.jsx'
import Explore from '../pages/Explore.jsx'
import Details from '../pages/Details.jsx'
import About from '../pages/About.jsx'

export default function AppRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/recipes/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem' }}>Page not found</h1>
              <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                The page you're looking for doesn't exist.
              </p>
              <a href="/" style={{ marginTop: '1.5rem', display: 'inline-block', color: 'var(--color-primary)' }}>
                Back home
              </a>
            </main>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}
