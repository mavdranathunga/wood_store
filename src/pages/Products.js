// src/pages/Products.js
import React from "react";
import "../css/Products.css";

const products = [
  { name: "Oak Firewood", price: "$25" },
  { name: "Pine Logs", price: "$30" },
  { name: "Sawdust Pack", price: "$15" },
  { name: "Oak Firewood", price: "$25" },
  { name: "Pine Logs", price: "$30" },
  { name: "Sawdust Pack", price: "$15" },
  { name: "Oak Firewood", price: "$25" },
  { name: "Pine Logs", price: "$30" },
  { name: "Sawdust Pack", price: "$15" }
];

function Products() {
  return (
    <div className="products">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
