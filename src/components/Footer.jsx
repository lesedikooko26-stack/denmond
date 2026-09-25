export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__logo">DENMOND</p>
          <p className="footer__tag">Defined by design.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <a href="#top">Home</a>
          <a href="#collection">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <ul className="footer__socials">
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a></li>
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
        </ul>
      </div>

      <p className="footer__bottom">© 2026 DENMOND. All rights reserved.</p>
    </footer>
  );
}
