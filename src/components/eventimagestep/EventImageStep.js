// EventImageStep.js
import React, { useState } from "react";
import Box from "@mui/material/Box";

const EventImageStep = ({ handleInputChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        handleInputChange("image", reader.result); // Pass image data to the parent component
      };
      reader.readAsDataURL(file);
    }
  };
  // 
  return (
    <div className="mt-5 mb-5">
      <h2>Step 4: Insert Image</h2>
 
      <input
        type="file"
        onChange={handleImageChange}
        inputProps={{ accept: "image/*" }}
        className="col-6 mt-4 pb-2"
      ></input>
      
      {selectedImage && (
        <Box mt={2}>
          <img src={selectedImage} alt="Selected" style={{ maxWidth: "100%", maxHeight: "200px" }} />
        </Box>
      )}

    </div>
  );
};

export default EventImageStep;
