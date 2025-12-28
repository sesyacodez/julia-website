import { useState, useEffect } from "react";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Introduction from "./components/Introduction";
import LatestProjects from "./components/LatestProjects";
import CartModal from "./components/CartModal";
import "./css/global.css";
import "./css/global.footer.css";
import "./css/global.header-nav.css";
import "./css/index.css";
import "./css/index.main-about-me.css";
import "./css/index.main-catalog.css";
import "./css/index.main-contact-me.css";
import "./css/index.main-introduction-hero.css";
import "./css/index.main-latest-projects.css";
import "./css/cart-modal.css";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Header cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
      <AboutMe />
      <Introduction />
      <LatestProjects />
      <Catalog addToCart={addToCart} />
      <ContactMe />
      <Footer />
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </>
  );
}

export default App;
