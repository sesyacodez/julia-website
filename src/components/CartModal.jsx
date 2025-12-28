import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/cart-modal.css";

function CartModal({ isOpen, onClose, cart, removeFromCart, clearCart }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return total + price;
      }, 0)
      .toFixed(2);
  };

  const formatOrderItems = () => {
    return cart
      .map((item) => `• ${item.title.substring(0, 50)}... - ${item.price}`)
      .join("\n");
  };

  // HTML version with images for email
  const formatOrderItemsHTML = () => {
    return cart
      .map(
        (item) => `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">
            <img src="${item.image}" alt="${item.title.substring(
          0,
          30
        )}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 5px;">
          </td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; vertical-align: top;">
            <p style="margin: 0 0 5px 0; font-weight: bold;">${item.title.substring(
              0,
              60
            )}...</p>
            <p style="margin: 0; color: #557d5f; font-weight: bold;">${
              item.price
            }</p>
          </td>
        </tr>`
      )
      .join("");
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const orderId = `ORDER-${Date.now()}`;
    const totalPrice = calculateTotal();

    // Email to CUSTOMER with payment instructions
    const customerEmailParams = {
      to_email: email,
      customer_name: name,
      order_items: formatOrderItems(),
      order_items_html: formatOrderItemsHTML(),
      total_price: totalPrice,
      order_id: orderId,
    };

    // Email to OWNER (you) with order details
    const ownerEmailParams = {
      customer_name: name,
      customer_email: email,
      order_items: formatOrderItems(),
      order_items_html: formatOrderItemsHTML(),
      total_price: totalPrice,
      order_id: orderId,
    };

    try {
      // Send payment instructions to customer
      console.log("Sending customer email with params:", customerEmailParams);
      await emailjs.send(
        "service_l5hf9bv",
        "template_8rens3m",
        customerEmailParams,
        "uICeDiendCSS4Un4-"
      );
      console.log("Customer email sent successfully!");

      // Send order notification to you (shop owner)
      console.log("Sending owner email with params:", ownerEmailParams);
      await emailjs.send(
        "service_l5hf9bv",
        "template_a8n0hbc",
        ownerEmailParams,
        "uICeDiendCSS4Un4-"
      );
      console.log("Owner email sent successfully!");

      setIsSubmitted(true);
      setTimeout(() => {
        clearCart();
        setIsCheckout(false);
        setIsSubmitted(false);
        setEmail("");
        setName("");
        onClose();
      }, 5000);
    } catch (err) {
      console.error("EmailJS error details:", err);
      console.error("Error text:", err.text);
      setError(
        `Failed to send email: ${err.text || err.message || "Unknown error"}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToCart = () => {
    setIsCheckout(false);
    setError("");
  };

  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-modal__header">
          <h2 className="cart-modal__title">
            {isCheckout ? "Checkout" : "Your Cart"}
          </h2>
          <button className="cart-modal__close" onClick={onClose}>
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
        </div>

        <div className="cart-modal__content">
          {isSubmitted ? (
            <div className="cart-modal__success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--accent-color)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3>Order Submitted!</h3>
              <p>Payment instructions have been sent to:</p>
              <p>
                <strong>{email}</strong>
              </p>
              <p className="cart-modal__success-note">
                After payment, you'll receive your digital files via email
                within 24 hours!
              </p>
            </div>
          ) : isCheckout ? (
            <form className="cart-modal__checkout" onSubmit={handleCheckout}>
              <div className="cart-modal__order-summary">
                <h3>Order Summary</h3>
                <ul className="cart-modal__summary-list">
                  {cart.map((item, index) => (
                    <li key={index} className="cart-modal__summary-item">
                      <span className="cart-modal__summary-title">
                        {item.title.substring(0, 40)}...
                      </span>
                      <span className="cart-modal__summary-price">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="cart-modal__summary-total">
                  <span>Total:</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>

              <div className="cart-modal__fields">
                <div className="cart-modal__field">
                  <label htmlFor="name" className="cart-modal__label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="cart-modal__input"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="cart-modal__field">
                  <label htmlFor="email" className="cart-modal__label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="cart-modal__input"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <p className="cart-modal__field-note">
                    Digital files will be sent to this email after payment.
                  </p>
                </div>
              </div>

              {error && <p className="cart-modal__error">{error}</p>}

              <div className="cart-modal__form-buttons">
                <button
                  type="button"
                  className="cart-modal__button cart-modal__button--secondary"
                  onClick={handleBackToCart}
                  disabled={isLoading}
                >
                  Back to Cart
                </button>
                <button
                  type="submit"
                  className="cart-modal__button cart-modal__button--primary"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Place Order"}
                </button>
              </div>
            </form>
          ) : cart.length === 0 ? (
            <div className="cart-modal__empty">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p>Your cart is empty</p>
              <button
                className="cart-modal__button cart-modal__button--primary"
                onClick={onClose}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <ul className="cart-modal__items">
                {cart.map((item, index) => (
                  <li key={index} className="cart-modal__item">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-modal__item-image"
                    />
                    <div className="cart-modal__item-details">
                      <h4 className="cart-modal__item-title">
                        {item.title.substring(0, 60)}...
                      </h4>
                      <p className="cart-modal__item-price">{item.price}</p>
                    </div>
                    <button
                      className="cart-modal__item-remove"
                      onClick={() => removeFromCart(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="cart-modal__footer">
                <div className="cart-modal__total">
                  <span>Total:</span>
                  <span>${calculateTotal()}</span>
                </div>
                <button
                  className="cart-modal__button cart-modal__button--primary"
                  onClick={() => setIsCheckout(true)}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartModal;
