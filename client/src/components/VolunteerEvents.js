import React from "react";


function VolunteerEvents({ event, volunteer, handleDeleteSignup, }) {

    // function handleDelete(){
    //     fetch(`/signups/${id}`,{ 
    //         method: "DELETE",
    //     });
    //     handleDeleteSignup(id);
    //   }

    return (
        <div className="eventdetails">
        <h2>{event.name}</h2>
        <h5>Date: {event.when}</h5>
        <h6>Location: {event.location}</h6>
        <button >❌Resign From Event</button>
        </div>
    );
} 

export default VolunteerEvents;