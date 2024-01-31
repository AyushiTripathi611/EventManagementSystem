import React from "react";
// import "./EventTitleStep.css";

const EventTitleStept = ({ handleInputChange, title }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
  };

  return (
    <div className="mt-5 mb-5">
      <h2>Step 1: Event Title</h2>
      <input
        type="text"
        name="title"
        placeholder="Event Title"
        value={title}
        onChange={handleChange}
        className="mt-4 p-2 w-100 rounded-3"
      />
    </div>
  );
};

export default EventTitleStept;
