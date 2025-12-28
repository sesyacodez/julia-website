function ProductCard({ image, title, price, addToCart }) {
  return (
    <article className="catalog__card">
      <img className="catalog__card-image" src={image} alt={title} />
      <h3 className="catalog__card-title">{title}</h3>
      <p className="catalog__card-price">{price}</p>
      <button className="catalog__card-button" onClick={addToCart}>
        Add to cart
      </button>
    </article>
  );
}

export default ProductCard;
