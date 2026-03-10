import React, { useState } from "react";

function AddHogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: "",
    "highest medal achieved": "",
    image: "",
  });

  function handleChange(e) {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddHog({
      ...formData,
      weight: parseFloat(formData.weight) || 0,
    });
    setFormData({
      name: "",
      specialty: "",
      greased: false,
      weight: "",
      "highest medal achieved": "",
      image: "",
    });
  }

  return (
    <div className="ui segment" style={{ marginBottom: "20px" }}>
      <div className="ui header">Add a New Hog</div>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="specialty">Specialty:</label>
          <input
            id="specialty"
            name="specialty"
            type="text"
            value={formData.specialty}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="weight">Weight:</label>
          <input
            id="weight"
            name="weight"
            type="number"
            step="0.1"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="image">Image URL:</label>
          <input
            id="image"
            name="image"
            type="text"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="medal">Highest Medal Achieved:</label>
          <input
            id="medal"
            name="highest medal achieved"
            type="text"
            value={formData["highest medal achieved"]}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input
              id="form-greased"
              name="greased"
              type="checkbox"
              checked={formData.greased}
              onChange={handleChange}
            />
            <label htmlFor="form-greased">Greased?</label>
          </div>
        </div>
        <button className="ui button primary" type="submit">Add Hog</button>
      </form>
    </div>
  );
}

export default AddHogForm;
