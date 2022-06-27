import React, { useEffect, useState } from "react";
import EventDetails from "./EventDetails";

import EventForm from "./EventForm";

function EventsContainer({ user }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then(setEvents);
  }, []);
  
  function onEventDelete(id) {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  }

  function handleAddEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

  return (
    <div>
      {<EventForm handleAddEvent={handleAddEvent} />}
      {events.map((event) => {
        return <EventDetails key={event.id} event={event} volunteer={user} onEventDelete={onEventDelete} />
      })}
      
    </div>
    // <div>
    //     <EventForm handleAddEvent={handleAddEvent} />
    // </div>
  );
}

export default EventsContainer;
