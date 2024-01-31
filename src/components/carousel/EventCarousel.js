import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventCarousel.css";

const EventCarousel = () => {
  const approvedEvents = JSON.parse(localStorage.getItem("approvedEvents")) || [];

  // Calculate the difference in days between two dates
  const dayDifference = (date1, date2) => {
    const ONE_DAY = 1000 * 60 * 60 * 24;
    const differenceMs = Math.abs(date1 - date2);
    return Math.round(differenceMs / ONE_DAY);
  };

  // Sort events by how close their date is to the current date
  const sortedEvents = approvedEvents
    .filter(event => new Date(event.date) >= new Date()) // Filter out past events
    .sort((a, b) => {
      return dayDifference(new Date(a.date), new Date()) - dayDifference(new Date(b.date), new Date());
    });

  // Select the top 3 closest events
  const closestEvents = sortedEvents.slice(0, 3);

  console.log(sortedEvents);
  console.log(closestEvents);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
<Slider {...settings}>
      {closestEvents.map((event, index) => (
        <div key={index} className="carousel-slide">
          <div
            className="carousel-image"
            style={{ backgroundImage: `url(${event.image || "/default-image.jpg"})` }}
          >
            <div className="glass-overlay">
              <h1 className="event-title">{event.title}</h1>
              <p className="event-date">{event.date}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default EventCarousel;
