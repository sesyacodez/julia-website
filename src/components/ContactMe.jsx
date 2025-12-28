function ContactMe() {
  return (
    <section className="contact-me container" id="contact-me">
      <div className="contact-me__image">
        <img src="img/contact-me/japandi.jpg" alt="Contact visual" />
      </div>

      <div className="contact-me__text">
        <h2 className="contact-me__title">Contact Me</h2>
        <svg
          className="contact-me__divider"
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

        <p className="contact-me__subtitle">
          LET'S CREATE SOMETHING GREAT TOGETHER!
        </p>

        <form className="contact-me__form" action="submit" method="post">
          <input type="text" name="client-name" placeholder="Enter your name" />
          <input
            type="text"
            name="client-email"
            placeholder="Enter your email"
          />
          <input
            type="text"
            name="client-message"
            placeholder="Enter your message"
          />
          <button type="submit" className="contact-me__button">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
