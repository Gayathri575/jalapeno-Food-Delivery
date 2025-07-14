import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu } from "lucide-react";
import jhead from "../../assets/jhead.png";
import { food_list } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useContext(StoreContext);
  const cartCount = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchQuery = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);
    setFilteredItems(
      query ? food_list.filter(item => item.name.toLowerCase().includes(query)) : []
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current?.contains(event.target)) setIsDropdownOpen(false);
      if (!searchRef.current?.contains(event.target)) setFilteredItems([]);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={jhead} alt="Jalapeño" className="logo-img" />
      </Link>

      {/* Search Section */}
      <div className="navbar-search" ref={searchRef}>
        <Search className="search-icon" size={18} />
        <input
          type="text"
          className="search-box"
          placeholder="Search food..."
          value={searchTerm}
          onChange={handleSearchQuery}
        />
        {filteredItems.length > 0 && (
          <div className="search-results">
            {filteredItems.map(item => (
              <div 
                key={item._id} 
                className="search-item" 
                onClick={() => setSearchTerm("")}
              >
                <img src={item.image} alt={item.name} className="search-item-img" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart and Dropdown Section */}
      <div className="cart-dropdown-container">
        <Link to="/cart" className="navbar-icon">
          <ShoppingCart size={30} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>

        <div className="dropdown" ref={dropdownRef}>
          <button 
            className="dropdown-btn" 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Menu size={30} />
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu open">
              <Link to="/recipe-book" className="dropdown-item">📖 Recipe Book</Link>
              <Link to="/food-redistribution" className="dropdown-item">🍽️ Food Redistribution</Link>
              <Link to="/ngo-view" className="dropdown-item">NGO View</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
