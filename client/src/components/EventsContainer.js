import React, { useEffect, useState } from "react";
import EventDetails from "./EventDetails";

function EventsContainer({ user }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then(setEvents);
  }, []);
  return (
    <div>
      {events.map((event) => {
        return <EventDetails key={event.id} event={event} volunteer={user} />;
      })}
    </div>
  );
}

export default EventsContainer;
