import React, { useEffect, useState } from "react";
import "./App.css";
import WebFont from "webfontloader";

import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const [showCart, setShowCart] = useState(true);

  function toggleShowCart() {
    setShowCart((prevCart) => !prevCart);
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Kumbh Sans:400, 700", "sans-serif"],
      },
    });
  });

  return (
    <div className="app">
      <Header toggleShowCart={toggleShowCart} />
      {showCart && (
        <div className="cart">
          <Cart />
        </div>
      )}
      <Product />
    </div>
  );
}

export default App;
