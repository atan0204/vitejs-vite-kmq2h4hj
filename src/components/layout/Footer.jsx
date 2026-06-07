import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">Saveur</div>
            <p className="footer__tagline">
              A quiet corner of the internet for recipes worth slowing down for.
            </p>
          </div>
          <div>
            <h2 className="footer__heading">Browse</h2>
            <ul className="footer__list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/explore">Explore</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="footer__heading">Credit</h2>
            <ul className="footer__list">
              <li>
                <a href="https://www.themealdb.com/" target="_blank" rel="noreferrer noopener">
                  TheMealDB API ↗
                </a>
              </li>
              <li>
                <a href="https://motion.dev/" target="_blank" rel="noreferrer noopener">
                  Motion.dev ↗
                </a>
              </li>
              <li>
                <a href="https://simpleparallax.com/" target="_blank" rel="noreferrer noopener">
                  SimpleParallax ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Saveur. Built for Assignment 3.</span>
          <span>Made with care.</span>
        </div>
      </div>
    </footer>
  )
}
