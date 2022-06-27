import React, { useEffect, useState } from "react";

function EventForm({handleAddEvent}){
    const [name, setName] = useState("");
    const [when, setWhen] = useState("");
    const [location, setLocation] = useState("");



    const handleNewEvents = (e) => {
        e.preventDefault();
    
        fetch("/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            when,
            location
          }),
        })
          .then((resp) => resp.json())
          .then((newEvent) => {
            handleAddEvent(newEvent);
          });
      };
    
    return(
        <div className="ui segment">
                <form id="form" className="ui form" onSubmit={handleNewEvents}>
                <div className="inline fields">
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input
                    type="text"
                    name="when"
                    placeholder="When"
                    value={when}
                    onChange={(e) => setWhen(e.target.value)}
                    />
                    <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <button className="ui button" type="submit">
                    Add New Volunteer Event!
                </button>
                </form>
            </div>
        );
}

export default EventForm;