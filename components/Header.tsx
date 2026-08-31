import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          10X-your-Skills
        </Link>

        <nav aria-label="Main navigation">
          <ul className="nav-list">
            <li className="hidden-mobile">
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li className="hidden-mobile">
              <a href="#roles" className="nav-link">
                Roles
              </a>
            </li>
            <li className="hidden-mobile">
              <a href="#faq" className="nav-link">
                FAQ
              </a>
            </li>
            <li>
              <Link href="/apply/" className="nav-cta">
                Apply
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
