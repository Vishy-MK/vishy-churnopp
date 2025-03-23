import React,{ useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Notifications from "./pages/Notifications";

function App() {
  const [cartCount, setCartCount] = useState(0);
  
  const [clickCount, setClickCount] = useState(Number(localStorage.getItem("clickCount")) || 0);
  const [startTime] = useState(Date.now());

  // Track Clicks
  useEffect(() => {
    const handleClick = () => {
      setClickCount((prev) => {
        const newCount = prev + 1;
        localStorage.setItem("clickCount", newCount);
        return newCount;
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Track Time Spent
  useEffect(() => {
    const handleUnload = () => {
      const totalTimeSpent = Math.floor((Date.now() - startTime) / 1000);
      localStorage.setItem("totalTimeSpent", totalTimeSpent);
      downloadCSV(); // Call CSV download on close
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  // Function to Generate and Download CSV
  const downloadCSV = () => {
    const totalTimeSpent = localStorage.getItem("totalTimeSpent") || 0;
    const csvData = [
      ["Clicks", "Time Spent (Seconds)"],
      [clickCount, totalTimeSpent]
    ];

    let csvContent = "data:text/csv;charset=utf-8," + csvData.map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "user_activity.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products setCartCount={setCartCount} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;