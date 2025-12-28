import { useState } from "react";

function LatestProjects() {
  const slides = [
    {
      src: `${import.meta.env.BASE_URL}latest-projects/abstract-seamless-pattern.jpg`,
      alt: "Seamless abstract pattern",
      caption: "Seamless abstract pattern",
    },
    {
      src: `${import.meta.env.BASE_URL}latest-projects/seamless-jellyfish-pattern.jpg`,
      alt: "Seamless jellyfish pattern",
      caption: "Seamless jellyfish pattern",
    },
    {
      src: `${import.meta.env.BASE_URL}latest-projects/universe-futuristic-background.jpg`,
      alt: "Futuristic universe background",
      caption: "Futuristic universe background",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="latest-projects container" id="latest-projects">
      <div className="latest-projects__text">
        <h2 className="latest-projects__title">Latest Works</h2>
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

        <p className="latest-projects__subtitle">
          MY PASSION IS TURNING IDEAS INTO MODERN, TIMELESS ART.
        </p>
      </div>

      <div className="carousel">
        <button onClick={prevSlide} className="carousel-control-prev">
          <span className="carousel-control-prev-icon" aria-hidden="true">
            ‹
          </span>
          <span className="visually-hidden">Previous</span>
        </button>

        <div className="carousel-inner">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="carousel-item">
                <img src={slide.src} alt={slide.alt} />
                <div className="carousel-caption">
                  <p>{slide.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={nextSlide} className="carousel-control-next">
          <span className="carousel-control-next-icon" aria-hidden="true">
            ›
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default LatestProjects;
