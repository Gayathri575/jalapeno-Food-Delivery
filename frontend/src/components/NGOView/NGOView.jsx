import React, { useState } from "react";
import NGOLoginModal from "./NGOLoginModal";
import "./NGOView.css";

const NGOView = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [ngoList, setNgoList] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      name: `NGO #${i + 1}`,
      contact: `+91 98765432${i}`,
      location: "Chennai"
    }))
  );

  const handleAddNGO = (newNGO) => {
    setNgoList([...ngoList, newNGO]);
  };

  return (
    <div className="ngo-view-container">
      <h1 className="ngo-heading">🤝 Partnered NGOs</h1>

      <div className="ngo-list">
        {ngoList.map((ngo, i) => (
          <div className="ngo-card" key={i}>
            <h3>{ngo.name}</h3>
            <p>Contact: {ngo.contact}</p>
            <p>Location: {ngo.location}</p>
          </div>
        ))}
      </div>

      <button className="join-ngo-btn" onClick={() => setShowLogin(true)}>
        Want to be an NGO?
      </button>

      {showLogin && (
        <NGOLoginModal
          onClose={() => setShowLogin(false)}
          onAddNGO={handleAddNGO}
        />
      )}
    </div>
  );
};

export default NGOView;
