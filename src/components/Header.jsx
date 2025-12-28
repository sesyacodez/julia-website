import { useState, useEffect, useRef } from "react";

function Header({ cartCount, onCartClick }) {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  // Set initial theme based on time
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 19 || hour < 7) {
      setDarkMode(true);
    }
  }, []);

  // Apply/remove dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Close menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navRef.current &&
        burgerRef.current &&
        !navRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section className="header-nav">
      <div className="header-nav__inner container" ref={navRef}>
        <div className="header-nav__left">
          <a href="#introduction-hero">
            <img
              className="header-nav__logo"
              src="img/header/logo.jpg"
              alt="Logo"
            />
          </a>
          <div
            className="header-nav__burger"
            ref={burgerRef}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`header-nav__list ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#about-me" onClick={() => setMenuOpen(false)}>
              About me
            </a>
          </li>
          <li>
            <a href="#latest-projects" onClick={() => setMenuOpen(false)}>
              Latest Projects
            </a>
          </li>
          <li>
            <a href="#catalog" onClick={() => setMenuOpen(false)}>
              Catalog
            </a>
          </li>
          <li>
            <a href="#contact-me" onClick={() => setMenuOpen(false)}>
              Contact me
            </a>
          </li>
        </ul>

        <div className="header-nav__icons">
          <button className="header-nav__cart" onClick={onCartClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartCount > 0 && (
              <span className="header-nav__cart-count">{cartCount}</span>
            )}
          </button>

          <ul className="header-nav__socials">
            <li>
              <a
                href="https://www.instagram.com/ju.angelarts"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Instagram SVG */}
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                {/* TikTok SVG */}
              </a>
            </li>
          </ul>

          <ul className="header-nav__dark-mode-button">
            <button onClick={() => setDarkMode(!darkMode)} id="darkModeToggle">
              <svg
                id="icon-moon"
                style={{ display: darkMode ? "none" : "inline" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-moon-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
              </svg>

              <svg
                id="icon-sun"
                style={{ display: darkMode ? "inline" : "none" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-brightness-high-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>
            </button>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;
