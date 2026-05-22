import { meta } from '../data/meta'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} <span>Tajveer Singh Dhesi</span>
        </p>
        <p className="footer__built">Built with React · Last updated: {meta.lastUpdated}</p>
      </div>
    </footer>
  )
}
