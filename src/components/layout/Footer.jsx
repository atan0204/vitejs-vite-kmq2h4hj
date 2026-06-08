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

        </div>

      </div>
    </footer>
  )
}
