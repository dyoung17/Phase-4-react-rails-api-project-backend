import React from "react";

function EventDetails({ event }) {
  function handleVolSignUp() {
    console.log("clicked");

    fetch("/signups", {
      method: "POST",
      headers: "Content-Type: application/json",
      body: JSON.stringify({
        // event,
        // volunteer
      }),
    });
  }

  return (
    <div>
      <h2>{event.name}</h2>
      <h5>{event.date}</h5>
      <h6>{event.location}</h6>
      <button onClick={handleVolSignUp}>Volunteer!</button>
    </div>
  );
}

export default EventDetails;
