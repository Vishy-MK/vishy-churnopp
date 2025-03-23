import React from "react";
import { motion } from "framer-motion";
import "../styles/global.css";

const Login = () => {
  return (
    <div className="login-page">
      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="login-title">Login</h1>
        <form className="login-form">
          <motion.input
            type="text"
            placeholder="Username"
            className="login-input"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="password"
            placeholder="Password"
            className="login-input"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.button
            type="submit"
            className="login-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;