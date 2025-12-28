function AboutMe() {
  return (
    <section className="about-me container" id="about-me">
      <div className="about-me__image">
        <img src={`${import.meta.env.BASE_URL}about-me/about-me__selfie.jpg`} alt="JuAngelArts selfie" />
      </div>

      <section className="about-me__text">
        <h2 className="about-me__title">About JuAngelArts</h2>
        <svg
          className="about-me__divider"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 2"
          preserveAspectRatio="none"
          style={{ width: "8%", height: "2px" }}
        >
          <line
            x1="0"
            y1="1"
            x2="100"
            y2="1"
            stroke="var(--text-color)"
            strokeWidth="1"
          />
        </svg>

        <p className="about-me__subtitle">
          PROFESSIONAL ILLUSTRATOR TAKING YOUR BRAND AND INDENTITY TO THE NEXT
          LEVEL
        </p>

        <p className="about-me__paragraph">
          JuAngelArts blends nature, cosmic landscapes, and bold, contemporary
          forms to craft striking vector illustrations. Her work spans patterns,
          digital compositions, and unique artworks, combining intricate
          details, vibrant colors, and a forward-looking artistic vision. Rooted
          in her Ukrainian heritage, each creation is designed to inspire,
          captivate, and bring imagination to life. She loves to showcase her
          artistic vision through patterns and illustrations that are both
          modern and timeless, making every project a personal artistic
          experience. Her passion is turning ideas into art that engages,
          delights, and leaves a lasting impression.
        </p>
      </section>
    </section>
  );
}

export default AboutMe;
