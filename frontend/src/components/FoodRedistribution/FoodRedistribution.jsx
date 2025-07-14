import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './FoodRedistribution.css';

const FoodRedistribution = () => {
  const [formData, setFormData] = useState({
    foodType: '',
    quantity: '',
    location: '',
    expiryTime: ''
  });

  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    // Dummy data for demo
    const dummyData = [
      {
        foodType: "Veg",
        quantity: "5",
        location: "Anna Nagar",
        expiryTime: new Date().toISOString(),
      },
    ];
    setFoodList(dummyData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFoodList(prev => [...prev, formData]);
    toast.success('🎉 Food entry added successfully!');
    setFormData({ foodType: '', quantity: '', location: '', expiryTime: '' });
  };

  return (
    <div className="food-redistribution">
      <ToastContainer />
      <h2 className="title">Redistribute Food</h2>
      
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="foodType"
          placeholder="Food Type (Veg / Non-Veg)"
          value={formData.foodType}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity (e.g., 10 meals)"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Pickup Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="expiryTime"
          value={formData.expiryTime}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <Link to="/ngo">
        <button className="view-ngo-btn">View NGO Dashboard</button>
      </Link>

      <h3 className="subheading">Available Food Entries</h3>
      <ul className="food-list">
        {foodList.map((item, idx) => (
          <li key={idx} className="food-card">
            <strong>{item.foodType}</strong> - {item.quantity} meals <br />
            📍 <span className="location">{item.location}</span> <br />
            🕒 Pickup Before: <span>{new Date(item.expiryTime).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodRedistribution;