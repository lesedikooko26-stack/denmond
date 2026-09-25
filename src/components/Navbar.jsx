import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "HOME", href: "#top" },
  { label: "SHOP", href: "#collection" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar({ cartCount, onOpenCart, onOpenMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo">
          DENMOND
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="icon-button navbar__search"
            aria-label="Search"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <line x1="21" y1="21" x2="16.2" y2="16.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            className="icon-button navbar__bag"
            aria-label={`Open shopping bag, ${cartCount} item${cartCount === 1 ? "" : "s"}`}
            onClick={onOpenCart}
          >
            <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
              <path
                d="M6 8h12l-1 12.2a1 1 0 0 1-1 .8H8a1 1 0 0 1-1-.8L6 8Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="M9 8V6.5a3 3 0 0 1 6 0V8" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            {cartCount > 0 && <span className="navbar__badge">{cartCount}</span>}
          </button>

          <button
            type="button"
            className="icon-button navbar__hamburger"
            aria-label="Open menu"
            onClick={onOpenMenu}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <line x1="3" y1="7" x2="21" y2="7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="3" y1="12.5" x2="21" y2="12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
