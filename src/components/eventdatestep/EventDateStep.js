import React from "react";

const EventDateStep = ({ handleInputChange, date }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
  };

  return (
    <div className="mt-5 mb-5">
      <h2>Step 3: Event Date</h2>
      <input
        type="date"
        name="date"
        placeholder="Event Date"
        value={date}
        onChange={handleChange}
        className="col-2 mt-4 rounded-3 px-2 py-1"
      />
    </div>
  );
};

export default EventDateStep;
