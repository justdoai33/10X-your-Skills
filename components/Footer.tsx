import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div>
            <Link href="/" className="footer-brand">
              10X-your-Skills
            </Link>
            <p className="footer-tagline">
              12 weeks building AI agents.<br />
              Free. Remote. 15 places.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="footer-nav">
              <li>
                <a href="#projects" className="footer-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#roles" className="footer-link">
                  Roles
                </a>
              </li>
              <li>
                <a href="#faq" className="footer-link">
                  FAQ
                </a>
              </li>
              <li>
                <Link href="/apply/" className="footer-link footer-link-primary">
                  Apply
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
