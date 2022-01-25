import React, { useEffect, useState } from "react";
import "./App.css";
import WebFont from "webfontloader";

import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";
import ProductInFocus from "./components/ProductInFocus";

function App() {
  const [showCart, setShowCart] = useState(true);
  const [numberOfItem, setNumberOfItem] = useState(0);
  const [inFocus, setInFocus] = useState(false);

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

  function toggleFocus() {
    setInFocus((prevState) => !prevState);
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
          <Cart numberOfItem={numberOfItem} setNumberOfItem={setNumberOfItem} />
        </div>
      )}
      <Product
        numberOfItem={numberOfItem}
        addItem={addItem}
        subtractItem={subtractItem}
        toggleFocus={toggleFocus}
      />
      {inFocus && (
        <div className="product__focus">
          <ProductInFocus toggleFocus={toggleFocus} />
        </div>
      )}
    </div>
  );
}

export default App;
