import React, { useEffect, useContext } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

const ExploreMenu = ({ category, setCategory }) => {
  
  const { menu_list } = useContext(StoreContext); // Fetch menu from context

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page starts at the top when loaded
  }, []);

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      
      <div className="explore-menu-list">
        {menu_list?.length > 0 ? (
          menu_list.map((item, index) => (
            <div 
              key={index} 
              className={`explore-menu-list-item ${category === item.menu_name ? "active" : ""}`} 
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
              tabIndex="0" // Improves keyboard accessibility
            >
              <img src={item.menu_image} alt={`Delicious ${item.menu_name}`} />
              <p>{item.menu_name}</p>
            </div>
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
