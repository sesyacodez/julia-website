import { useState, useEffect } from "react";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Introduction from "./components/Introduction";
import LatestProjects from "./components/LatestProjects";
import "./css/global.css";
import "./css/global.footer.css"
import "./css/global.header-nav.css"
import "./css/index.css"
import "./css/index.main-about-me.css"
import "./css/index.main-catalog.css"
import "./css/index.main-contact-me.css"
import "./css/index.main-introduction-hero.css"
import "./css/index.main-latest-projects.css"



function App() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

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

  return (
    <>
      <Header />
      <AboutMe />
      <Introduction />
      <LatestProjects />
      <Catalog addToCart={addToCart} />
      <div className="cart-summary">
        <h2>Cart ({cart.length})</h2>
        {cart.length > 0 && (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} - {item.price}{" "}
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
