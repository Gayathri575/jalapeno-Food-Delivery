import React, { useState } from "react";
import { toast } from "react-toastify";
import "./NGOView.css";

const NGOLoginModal = ({ onClose, onAddNGO }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newNGO = {
      name: formData.name,
      contact: formData.contact,
      location: formData.address,
    };

    onAddNGO(newNGO);
    toast.success(`🎉 ${formData.name} added as a new partner!`);
    onClose();
  };

  return (
    <div className="ngo-modal-overlay">
      <div className="ngo-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>NGO Login / Register</h2>
        <form onSubmit={handleSubmit} className="ngo-form">
          <input name="name" placeholder="NGO Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="contact" placeholder="Contact Number" onChange={handleChange} required />
          <input name="address" placeholder="Address" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default NGOLoginModal;
