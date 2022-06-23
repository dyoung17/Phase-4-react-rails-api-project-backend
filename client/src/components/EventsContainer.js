import React, { useEffect, useState } from "react";
import EventDetails from "./EventDetails";

function EventsContainer() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((r) => r.json())
      .then(setEvents);
  }, []);
  return (
    <div>
      Events Container
      {events.map((event) => {
        return <EventDetails key={event.id} {...event} />;
      })}
    </div>
  );
}

export default EventsContainer;
