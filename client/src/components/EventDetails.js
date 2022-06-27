import React, { useEffect, useState }from "react";
import EditEvent from "./EditEvent";

function EventDetails({ event, volunteer, onEventDelete, handleUpdateEvent }) {
  //const [eventId, setEventId] = useState("");
  //const [volunteerId, setVolunteerId] =useState("");
  const [isEditing, setIsEditing] = useState(false);


  // function addSignupEvent() {
  //   console.log("addSignupEvent called");
  // }

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

  function handleDeleteClick() {
    fetch(`events${event.id}`, {
      method: "DELETE",
    });
    onEventDelete(event.id);
  }

  return (
    <div className="eventdetails">
      <h2>{event.name}</h2>
      <h5>Date: {event.date}</h5>
      <h6>Location: {event.location}</h6>
      {volunteer ? <button onClick={handleVolSignUp}>Volunteer!</button> : null}
      <button onClick={() => setIsEditing((isEditing) => !isEditing)}>⭐Edit</button>
      <button onClick={handleDeleteClick} >❌Delete this Event</button>
      {isEditing ? (
        
        <EditEvent event={event} handleUpdateEvent={handleUpdateEvent}/>
         ) : (
        <p></p>
      )}
    </div>
 


      
  );
}

export default EventDetails;
