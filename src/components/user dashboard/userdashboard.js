// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./userdashboard.css";
// // import EventList from "../eventlist/eventlist";
// import HeaderCopy from "../header/headercopy";
// import Paper from '@mui/material/Paper';

// function UserDashboard() {
//   const approvedRequests = JSON.parse(localStorage.getItem("approvedEvents"));
//   const [pendingRequests, setpendingRequests] = useState(
//     JSON.parse(localStorage.getItem("events")) || []
//   );
//   useEffect(() => {
//     // Fetch and set approval requests when the component mounts
//     setpendingRequests(JSON.parse(localStorage.getItem("events")) || []);
//   }, []);

//   return (
//     <>
//       <HeaderCopy />
//       <div className="container">
//         <Link to="/createevent">
//           <button className="btn btn-primary mt-3">Create Event</button>
//         </Link>
//         <div className="row mt-3">
//           <div className="row -md-6">
//             <h3>Requested Approvals</h3>
//             <div>
//               {pendingRequests.map((event, index) => (
//                 <div key={index}>
//                   <p>Title: {event.title}</p>
//                   <p>Description: {event.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="col-md-6">
//             <h3>Approved Requests</h3>
//             {approvedRequests.map((event, index) => (
//               <div key={index} className="mb-4">
//                <Paper>{"Title: " + event.title}
//                <br></br>
//                 {"Date: " + event.date}</Paper>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default UserDashboard;

import "./userdashboard.css";
import HeaderCopy from "../header/headercopy";
import UserDashboardDisplay from "../userdashboarddisplay";
import Option from "../createeventoption";
function UserDashboard() {


  return (
    <>
    <HeaderCopy />
    <div className="container">
      <Option/>
      <br></br>
      <UserDashboardDisplay/>
    </div>
    </>
  );
}

export default UserDashboard;
