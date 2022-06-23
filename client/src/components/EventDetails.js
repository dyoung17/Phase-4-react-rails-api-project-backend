import React from "react";

function EventDetails({ event }) {
  return (
    <div>
      <h2>{event.name}</h2>
      <h4>{event.when}</h4>
      <h4>{event.location}</h4>
    </div>
  );
}

export default EventDetails;
