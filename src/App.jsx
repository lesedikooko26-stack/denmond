import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Hero from "./components/Hero.jsx";
import Collection from "./components/Collection.jsx";
import ProductModal from "./components/ProductModal.jsx";
import Cart from "./components/Cart.jsx";
import About from "./components/About.jsx";
import BrandStatement from "./components/BrandStatement.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const addToBag = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setCartOpen(true);
  };

  const increaseQty = (id) =>
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );

  const decreaseQty = (id) =>
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );

  const removeFromBag = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  const clearBag = () => setCartItems([]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenMenu={() => setMenuOpen(true)}
      />
      <MobileMenu open={isMenuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <Hero />
        <Collection onView={setActiveProduct} onAddToBag={addToBag} />
        <About />
        <BrandStatement />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />

      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onAddToBag={addToBag}
      />

      <Cart
        open={isCartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onIncrease={increaseQty}
        onDecrease={decreaseQty}
        onRemove={removeFromBag}
        onClear={clearBag}
      />
    </>
  );
}
