import { Link } from "react-router-dom";

function Option() {


    return (
        <>
           <div className="mt-5 bg-black p-5">
            <h2 className="text-white">
                Welcome, 
                You can create your event here. 
            </h2>
           <Link to="/createevent">
                <button className="btn btn-primary">Create Event</button>
            </Link>
           </div>
        </>
    );
}

export default Option;


