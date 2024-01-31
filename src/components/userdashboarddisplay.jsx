// import Paper from '@mui/material/Paper';
// import Chip from '@mui/material/Chip';
// import React, { useState, useEffect } from "react";

// function UserDashboardDisplay() {

//     const [approvedRequests, setApprovedRequests] = useState([]);
//     const [pendingRequests, setpendingRequests] = useState([]);
//     const [deniedRequests, setDeniedRequests] = useState([]);

//     useEffect(() => {
//         // Fetch and set approval requests
//         const storedpendingRequests = JSON.parse(localStorage.getItem("events"));
//         if (storedpendingRequests) {
//             setpendingRequests(storedpendingRequests);
//         }
//         // Fetch and set approved requests
//         const storedApprovedRequests = JSON.parse(localStorage.getItem("approvedEvents"));
//         if (storedApprovedRequests) {
//             setApprovedRequests(storedApprovedRequests);
//         }
//         const storedDeniedRequests = JSON.parse(localStorage.getItem("deniedEvents"));
//         if (storedDeniedRequests) {
//             setDeniedRequests(storedDeniedRequests);
//         }
//     }, []);

//     return (
//         <>
//             <div className="row-md-6">
//                 <h3>Requested Status</h3>
//                 <div className="col-12">
//                     {pendingRequests.length > 0 ? pendingRequests.map((event, index) => (
//                         <div key={index} className="col mb-4">
//                             <Paper square elevation={3} className="pending-card">
//                                 {"Title: " + event.title}
//                                 <br></br>
//                                 {"Date: " + event.date}
//                             </Paper>
//                         </div>
//                     )) : <p>No pending requests</p>}
//                 </div>
//                 <div className="row row-md-6">
//                     <div className="col-6 mr-4">
//                         {approvedRequests.length > 0 ? approvedRequests.map((event, index) => (
//                             <div key={index} className="col mb-4">
//                                 <Paper elevation={3} square className="approved-card">
//                                     <div className="d-flex justify-content-between ">
//                                         {"Title: " + event.title}
//                                         <Chip label="Approved" color="success" variant="outlined" />
//                                     </div>
//                                     {"Date: " + event.date}
//                                 </Paper>
//                             </div>
//                         )) : <p>No approved events</p>}
//                     </div>
//                     <div className="col-6 ml-4">
//                         {deniedRequests.length > 0 ? deniedRequests.map((event, index) => (
//                             <div key={index} className="col mb-4">
//                                 <Paper elevation={3} square className="rejected-card">
//                                     <div className="d-flex justify-content-between ">
//                                         {"Title: " + event.title}
//                                         <Chip label="Rejected" color="error" variant="outlined" />
//                                     </div>
//                                     {"Date: " + event.date}
//                                 </Paper>
//                             </div>
//                         )) : <p>No rejected events</p>}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
// export default UserDashboardDisplay;



import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';

function UserDashboardDisplay() {
    const [approvedRequests, setApprovedRequests] = useState([]);
    const [pendingRequests, setPendingRequests] = useState([]);
    const [deniedRequests, setDeniedRequests] = useState([]);
    const [view, setView] = useState('all'); // New state for managing view

    useEffect(() => {
        // Fetch and set requests
        setPendingRequests(JSON.parse(localStorage.getItem("events")) || []);
        setApprovedRequests(JSON.parse(localStorage.getItem("approvedEvents")) || []);
        setDeniedRequests(JSON.parse(localStorage.getItem("deniedEvents")) || []);
    }, []);

    const renderEvents = (events, status) => {
        return events.map((event, index) => (
            <div key={index} className="col mb-4">
                <Paper elevation={1} square className={`${status}-card`}>
                    <div className="d-flex justify-content-between ">
                        {"Title: " + event.title}
                        {status !== 'pending' && (
<div className={`px-2 py-1 rounded-3 text-light ${status === 'approved' ? 'bg-success border-success' : 'bg-danger border-danger'}`}>{status === 'approved' ? 'Approved' : 'Rejected'}</div>
)}
                    </div>
                    {"Date: " + event.date}
                </Paper>
            </div>
        ));
    };

    return (
        <>
                <h3>Request Status</h3>
            <div className="button-group mt-3 mb-4">
                <Button className='bg-primary-subtle text-black me-1' variant="contained" onClick={() => setView('all')}>All</Button>
                <Button className='bg-warning text-black mx-1' variant="contained" onClick={() => setView('pending')}>Pending</Button>
                <Button className='bg-success text-black mx-1' variant="contained" onClick={() => setView('approved')}>Approved</Button>
                <Button className='bg-danger text-black ms-1' variant="contained" onClick={() => setView('rejected')}>Rejected</Button>
            </div>
            <div className="row-md-6">
                <div className="col-12">
                    {view === 'all' || view === 'pending' ? renderEvents(pendingRequests, 'pending') : null}
                    {view === 'all' || view === 'approved' ? renderEvents(approvedRequests, 'approved') : null}
                    {view === 'all' || view === 'rejected' ? renderEvents(deniedRequests, 'rejected') : null}
                    {view === 'all' && !pendingRequests.length && !approvedRequests.length && !deniedRequests.length && <p>No events</p>}
                </div>
            </div>
        </>
    );
}

export default UserDashboardDisplay;
