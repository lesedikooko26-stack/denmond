const NAV_LINKS = [
  { label: "HOME", href: "#top" },
  { label: "SHOP", href: "#collection" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}
      aria-hidden={!open}
    >
      <div className="mobile-menu__backdrop" onClick={onClose} />
      <div className="mobile-menu__panel">
        <div className="mobile-menu__header">
          <span className="mobile-menu__logo">DENMOND</span>
          <button
            type="button"
            className="icon-button"
            aria-label="Close menu"
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="mobile-menu__links" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={onClose}>
              {link.label}
            </a>
          ))}
        </nav>

        <p className="mobile-menu__tag">DEFINED BY DESIGN.</p>
      </div>
    </div>
  );
}
