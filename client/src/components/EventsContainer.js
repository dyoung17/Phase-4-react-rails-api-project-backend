import React, { useEffect, useState } from "react";
import EventDetails from "./EventDetails";

function EventsContainer() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then(setEvents);
  }, []);
  return (
    <div>
      {events.map((event) => {
        return <EventDetails key={event.id} event={event} />;
      })}
    </div>
  );
}

export default EventsContainer;
