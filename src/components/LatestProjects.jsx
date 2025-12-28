function LatestProjects() {
  return (
    <section className="latest-projects container" id="latest-projects">
      <div className="latest-projects__text">
        <h2 className="latest-projects__title">Latest Works</h2>
        <svg
          className="about-me__divider"
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

        <p className="latest-projects__subtitle">
          MY PASSION IS PHOTOSHOOTS TURNING IDEAS INTO MODERN, TIMELESS ART.
        </p>
      </div>

      <div id="latest-projects__carousel__caption" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#latest-projects__carousel__caption"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#latest-projects__carousel__caption"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#latest-projects__carousel__caption"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="img/latest-projects/abstract-seamless-pattern.jpg"
              className="d-block w-100"
              alt="Seamless abstract pattern"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Seamless abstract pattern</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="img/latest-projects/seamless-jellyfish-pattern.jpg"
              className="d-block w-100"
              alt="Seamless jellyfish pattern"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Seamless jellyfish pattern</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="img/latest-projects/universe-futuristic-background.jpg"
              className="d-block w-100"
              alt="Futuristic universe background"
            />
            <div className="carousel-caption d-none d-md-block">
              <p>Futuristic universe background</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#latest-projects__carousel__caption"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#latest-projects__carousel__caption"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default LatestProjects;
