import React from "react";
function EventDetails({ event, volunteer }) {
  //const [eventId, setEventId] = useState("");
  //const [volunteerId, setVolunteerId] =useState("");

  function addSignupEvent() {
    console.log("addSignupEvent called");
  }

  function handleVolSignUp() {
    const signupData = {
      event_id: event.id,
    };
    fetch("/signups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
    console.log(`fetch console log ${event.id}, ${volunteer.id}`);
  }

  return (
    <div className="eventdetails">
      <h2>{event.name}</h2>
      <h5>Date: {event.date}</h5>
      <h6>Location: {event.location}</h6>
      {volunteer ? <button onClick={handleVolSignUp}>Volunteer!</button> : null}
      <button>⭐Going to this event!</button>
      <button>❌Resign From Event</button>
    </div>
  );
}

export default EventDetails;
