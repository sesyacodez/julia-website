function Introduction() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-me");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="introduction container" id="introduction-hero">
      <div className="introduction__text-container">
        <p className="introduction__subtitle">VECTOR ILLUSTRATOR</p>
        <h1 className="introduction__title">JuAngelArts</h1>

        <svg
          className="introduction__divider"
          xmlns="http://www.w3.org/2000/svg"
          width="3000"
          height="31"
          style={{ width: "8%" }}
        >
          <path
            d="M0 15.5 L3000 15.5"
            stroke="var(--text-color)"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        <p className="introduction__description">
          A UKRAINIAN VECTOR ILLUSTRATOR CREATING MODERN AND FUTURISTIC FLORAL,
          GALACTIC, AND ABSTRACT ART.
        </p>

        <button
          className="introduction__contact-me-button"
          onClick={scrollToContact}
        >
          CONTACT ME
        </button>
      </div>

      <div className="introduction__photo-container">
        <img
          className="introduction__artist_photo"
          src="img/introduction-hero/artist.jpg"
          alt="JuAngelArts"
        />
      </div>
    </section>
  );
}

export default Introduction;
