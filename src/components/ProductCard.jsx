function ProductCard({ product, onCardClick, addToCart }) {
  const handleCardClick = (e) => {
    // Don't open modal if clicking on the Add to cart button
    if (e.target.classList.contains("catalog__card-button")) {
      return;
    }
    onCardClick();
  };

  return (
    <article className="catalog__card" onClick={handleCardClick}>
      <img
        className="catalog__card-image"
        src={product.image}
        alt={product.title}
      />
      <h3 className="catalog__card-title">{product.title}</h3>
      <p className="catalog__card-price">{product.price}</p>
      <button className="catalog__card-button" onClick={addToCart}>
        Add to cart
      </button>
    </article>
  );
}

export default ProductCard;
