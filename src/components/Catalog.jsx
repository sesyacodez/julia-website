import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title:
      "Watercolor floral frame design on black background flowers template, beautiful wreath with space for text, wedding greeting card, dark Halloween aesthetics",
    price: "$67.99",
    image:
      "https://as2.ftcdn.net/v2/jpg/05/30/38/13/1000_F_530381337_02VD3KwvFocwMYQdQLdwzdsktra6U0Rq.jpg",
  },
  {
    id: 2,
    title:
      "Dark academia floral pattern seamless Vintage gothic flowers watercolor repeat abstract background in black blue colors, Halloween style",
    price: "$67.99",
    image:
      "https://as2.ftcdn.net/v2/jpg/07/48/90/45/1000_F_748904567_K87MCxt7VNBZIrTKM8nJ4Zgm4Pulx5IL.jpg",
  },
  {
    id: 3,
    title:
      "Pattern seamless jellyfishes Space colorful repeat texture wallpaper illustration Night galaxy mix with watercolor jelly fishes in bright style vivid blue purple violet isolated on dark background",
    price: "$67.99",
    image:
      "https://as2.ftcdn.net/v2/jpg/03/26/50/19/1000_F_326501986_7wN0HRjFE9xQui2wR5OFNXzF6cqvpawm.jpg",
  },
  {
    id: 4,
    title:
      "Dark marble stone seamless pattern stucco, plaster texture background. Pink, blue, black mineral agate structure repeat design. Artistic illustration",
    price: "$67.99",
    image:
      "https://as1.ftcdn.net/v2/jpg/04/21/63/86/1000_F_421638698_yN22jNnaZeUpdaGr8JJ5qRFmqQpQPunD.jpg",
  },
];

function Catalog({ addToCart }) {
  return (
    <section className="catalog container" id="catalog">
      <div className="catalog__titles">
        <h2 className="catalog__titles-title">
          Fresh Angle on Familiar Things
        </h2>
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
        <p className="catalog__titles-subtitle subtitle">
          Creative approach is my signature
        </p>
      </div>

      <div className="catalog__items">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </section>
  );
}

export default Catalog;
