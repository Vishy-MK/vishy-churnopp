import "../styles/global.css";
import { FaHome, FaBoxOpen, FaShoppingCart, FaClipboardList, FaUser, FaBell } from 'react-icons/fa';

const Sidebar = () => (
  <aside className="sidebar">
    <a href="/" className="sidebar-link"><FaHome className="sidebar-icon" /> Home</a>
    <a href="/products" className="sidebar-link"><FaBoxOpen className="sidebar-icon" /> Products</a>
    <a href="/cart" className="sidebar-link"><FaShoppingCart className="sidebar-icon" /> Cart</a>
    <a href="/orders" className="sidebar-link"><FaClipboardList className="sidebar-icon" /> Orders</a>
    <a href="/account" className="sidebar-link"><FaUser className="sidebar-icon" /> Account</a>
    <a href="/notifications" className="sidebar-link"><FaBell className="sidebar-icon" /> Notifications</a>
  </aside>
);

export default Sidebar;