function Footer() {
  return (
    <footer className="footer container">
      <a href="#introduction-hero" className="footer__logo-link">
        <img
          className="header-nav__logo"
          src="img/header/logo.jpg"
          alt="Julia logo"
        />
      </a>

      <ul className="footer__list">
        <li>
          <a href="#about-me">About me</a>
        </li>
        <li>
          <a href="#latest-projects">Latest Projects</a>
        </li>
        <li>
          <a href="#catalog">Catalog</a>
        </li>
        <li>
          <a href="#contact-me">Contact me</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
