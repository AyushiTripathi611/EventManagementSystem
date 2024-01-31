// Updated Home.js
import React from "react";
import "./home.css";
import EventCarousel from "../carousel/EventCarousel";
import EventList from "../eventlist/eventlist";
import HeaderCopy from "../header/headercopy";

function Home() {
const eventstat =  JSON.parse(localStorage.getItem("approvedEvents"));
  return (
    <>
      <HeaderCopy />
{eventstat > "0" ? (
  
  <div>
    <EventCarousel />
  <EventList />
  </div>

): (<div className="container"><div className="bg-black p-5  my-5"><h2 className="text-white">Events Coming Soon...</h2></div></div>)}
    </>
  );
      }

export default Home;
