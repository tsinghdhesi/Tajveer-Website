export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} <span>Tajveer Singh Dhesi</span>
        </p>
        <p className="footer__built">Built with React</p>
      </div>
    </footer>
  )
}
