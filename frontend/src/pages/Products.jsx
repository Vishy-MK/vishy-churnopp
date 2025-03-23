import React, { useState } from "react";
import "../styles/global.css";

const products = [
  { id: 1, name: "Laptop", image: "https://via.placeholder.com/150?text=Laptop", inStock: true },
  { id: 2, name: "Smartphone", image: "https://via.placeholder.com/150?text=Smartphone", inStock: true },
  { id: 3, name: "Headphones", image: "https://via.placeholder.com/150?text=Headphones", inStock: false },
  { id: 4, name: "Smartwatch", image: "https://via.placeholder.com/150?text=Smartwatch", inStock: true },
  { id: 5, name: "Camera", image: "https://via.placeholder.com/150?text=Camera", inStock: true },
  { id: 6, name: "Tablet", image: "https://via.placeholder.com/150?text=Tablet", inStock: false },
  { id: 7, name: "Keyboard", image: "https://via.placeholder.com/150?text=Keyboard", inStock: true },
  { id: 8, name: "Mouse", image: "https://via.placeholder.com/150?text=Mouse", inStock: true },
  { id: 9, name: "Monitor", image: "https://via.placeholder.com/150?text=Monitor", inStock: false },
  { id: 10, name: "Printer", image: "https://via.placeholder.com/150?text=Printer", inStock: true },
  { id: 11, name: "Router", image: "https://via.placeholder.com/150?text=Router", inStock: true },
  { id: 12, name: "External Hard Drive", image: "https://via.placeholder.com/150?text=External+Hard+Drive", inStock: false },
  { id: 13, name: "USB Flash Drive", image: "https://via.placeholder.com/150?text=USB+Flash+Drive", inStock: true },
  { id: 14, name: "Power Bank", image: "https://via.placeholder.com/150?text=Power+Bank", inStock: true },
  { id: 15, name: "Charger", image: "https://via.placeholder.com/150?text=Charger", inStock: false },
  { id: 16, name: "Speaker", image: "https://via.placeholder.com/150?text=Speaker", inStock: true },
  { id: 17, name: "Webcam", image: "https://via.placeholder.com/150?text=Webcam", inStock: true },
  { id: 18, name: "Microphone", image: "https://via.placeholder.com/150?text=Microphone", inStock: false },
  { id: 19, name: "VR Headset", image: "https://via.placeholder.com/150?text=VR+Headset", inStock: true },
  { id: 20, name: "Smart Light", image: "https://via.placeholder.com/150?text=Smart+Light", inStock: true },
];

const Products = ({ setCartCount }) => {
  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
    alert("Added to cart");
  };

  const handleBuyNow = () => {
    alert("Bought");
  };

  return (
    <div className="page">
      <h1>Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-stock">{product.inStock ? "In Stock" : "Out of Stock"}</p>
            <div className="product-buttons">
              <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
              <button className="btn btn-secondary" onClick={handleBuyNow}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;