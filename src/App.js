import React, { useEffect, useState } from "react";
import "./App.css";
import WebFont from "webfontloader";

import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  const [showCart, setShowCart] = useState(true);
  const [numberOfItem, setNumberOfItem] = useState(0);

  function toggleShowCart() {
    setShowCart((prevCart) => !prevCart);
  }

  function addItem() {
    setNumberOfItem((prevNumber) => prevNumber + 1);
  }

  function subtractItem() {
    if (numberOfItem) {
      setNumberOfItem((prevNumber) => prevNumber - 1);
    }
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Kumbh Sans:400, 700", "sans-serif"],
      },
    });
    setShowCart(false);
  }, []);

  return (
    <div className="app">
      <Header toggleShowCart={toggleShowCart} />
      {showCart && (
        <div className="cart">
          <Cart numberOfItem={numberOfItem} />
        </div>
      )}
      <Product
        numberOfItem={numberOfItem}
        addItem={addItem}
        subtractItem={subtractItem}
      />
    </div>
  );
}

export default App;
