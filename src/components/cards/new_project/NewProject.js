import React, { useState } from "react";

function NewProject({ isOpen, onClose, initialData, onSubmit }) {
  const [formData, setFormData] = useState(initialData || {});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
  }

  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  ) : null;
}

export default NewProject;
