import React, { useState } from "react";
import "./eventlist.css";
import MediaCard from "../EventTiles";
import EventListView from "../Eventlistview";
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import WindowIcon from '@mui/icons-material/Window';
import EventSearchBar from "../eventsearchbar/EventSearchBar";

function EventList() {
  const allEvents = JSON.parse(localStorage.getItem("approvedEvents")) || [];
  const [view, setView] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter events based on the search term
  const filteredEvents = allEvents.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleView = (newView) => {
    setView(newView);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };


  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-2">
            <div className="btn-group pt-5">
              <button
                className={`btn ${view === "grid" ? "btn-primary" : "btn-secondary"}`}
                onClick={() => toggleView("grid")}
              >
                <WindowIcon />
              </button>
              <button
                className={`btn ${view === "list" ? "btn-primary" : "btn-secondary"}`}
                onClick={() => toggleView("list")}
              >
                <ViewHeadlineIcon />
              </button>
            </div>
          </div>
        </div>
        <EventSearchBar className="w-100" onSearch={handleSearch} />
<br></br>
        {view === "grid" ? (
          <div className="row row-cols-1 row-cols-md-4">
            {filteredEvents.map((event, index) => (
              <div key={index} className="col mb-4">
                <MediaCard event={event} />
              </div>
            ))}
          </div>
        ) : (
          <EventListView events={filteredEvents} />
        )}
      </div>
  );
}

export default EventList;
