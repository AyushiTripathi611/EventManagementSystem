import React from "react";

const EventTimeStep = ({ handleInputChange, time }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(name, value);
  };

  return (
    <div className="mt-5 mb-5">
      <h2>Step 4: Event Time</h2>
      <input
        type="time"
        name="time"
        placeholder="Event Time"
        value={time}
        onChange={handleChange}
        className="col-2 mt-4 rounded-3 px-2 py-1"
      />
    </div>
  );
};

export default EventTimeStep;
