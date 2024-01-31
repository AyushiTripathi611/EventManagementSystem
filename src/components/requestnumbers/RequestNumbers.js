// RequestNumbers.js
import React from "react";
import Paper from '@mui/material/Paper';
// import "./RequestNumbers.css";

const RequestNumbers = ({ pending, approved, denied }) => (
  <Paper className="d-flex my-5 request-numbers-container my-5 me-5">
        <div className="px-3 py-3 pt-3 pb-3 text-center request-number">
          Pending requests <br /> <span>({pending})</span>
        </div>
        <div className="px-3 py-3 pt-3 pb-3 text-center request-number">
          Approved requests <br /> <span>({approved})</span>
        </div>
        <div className="px-3 py-3 pt-3 pb-3 text-center request-number">
          Rejected requests <br /> <span>({denied})</span>
        </div>
      </Paper>
);

export default RequestNumbers;
