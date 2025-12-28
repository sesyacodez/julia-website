function ProductCard({ image, title, price, addToCart }) {
  return (
    <article className="catalog__card">
      <div className="catalog__card-image">
        <img className="catalog__card-image" src={image} alt={title} />
      </div>
      <h3 className="catalog__card-title subtitle">{title}</h3>
      <p className="catalog__card-price">{price}</p>
      <button className="catalog__card-button" onClick={addToCart}>
        Add to cart
      </button>
    </article>
  );
}

export default ProductCard;
