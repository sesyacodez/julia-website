import { useEffect } from "react";

function ProductModal({ product, onClose, addToCart }) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    // Handle escape key to close modal
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("product-modal__overlay")) {
      onClose();
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  if (!product) return null;

  return (
    <div className="product-modal__overlay" onClick={handleBackdropClick}>
      <div className="product-modal">
        <button className="product-modal__close" onClick={onClose}>
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
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="product-modal__content">
          <div className="product-modal__image-container">
            <img
              className="product-modal__image"
              src={product.image}
              alt={product.title}
            />
          </div>

          <div className="product-modal__details">
            <h2 className="product-modal__title">{product.title}</h2>
            <p className="product-modal__description">
              {product.description ||
                "This beautiful digital artwork is perfect for adding a unique touch to your creative projects. High-resolution file suitable for printing, digital design, and more. Instant download available after purchase."}
            </p>
            <p className="product-modal__price">{product.price}</p>
            <button
              className="product-modal__add-btn"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
