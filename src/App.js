import React, { useEffect } from "react";
import "./App.css";
import WebFont from "webfontloader";

import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Kumbh Sans:400, 700", "sans-serif"],
      },
    });
  });

  return (
    <div className="app">
      <Header />
      <Product />
    </div>
  );
}

export default App;
