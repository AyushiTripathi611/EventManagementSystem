import React from "react";

const EventDescriptionStep = ({ handleInputChange, description }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
  };

  return (
    <div className="mt-5 mb-3">
      <h2>Step 2: Event Description</h2>
      <textarea
        name="description"
        placeholder="Event Description"
        value={description}
        onChange={handleChange}
        className="mt-3 p-2 w-100 rounded-3"
      />
    </div>
  );
};

export default EventDescriptionStep;
