import React, {useState, useEffect } from "react";

import VolunteerEvents from "./VolunteerEvents" 

function Home({ volunteer }) {
   const [volunteerEvents, setVolunteerEvents] = useState([]);
   const [signups, setSignups] = useState([]);

  useEffect(()=> {
    fetch('/signups')
      .then((r) => r.json())
      .then((signups) => setSignups(signups));
  }, []);


   useEffect(() => {
    if (volunteer?.id) {
      fetch(`/volunteers/${volunteer.id}`)
      .then(r => r.json())
       .then(volunteer => setVolunteerEvents(volunteer.events));
    };  
   }, [volunteer?.id]);

   console.log('volunteer events', volunteerEvents)

   

   function handleDeleteSignup(id) {
    const updatedsignups = signups.filter((signup) => signup.id !== id);
    setSignups(updatedsignups);
  }



  
    
  return (
    <div>
      {volunteerEvents.map((event) => {
        return <VolunteerEvents event={event} key={event.id} volunteer={volunteer} handleDeleteSignup={handleDeleteSignup}/>
       })}
    </div>
  );
}

// if(volunteer) {
//   return (
//     <div>
//       <h2>Hello, {volunteer.first_name}!</h2>
//       {volunteer ? <h3>EventList:</h3> : <h3>No Events Added</h3> }
//       {renderEvents()}
//     </div>
//   );
// } else {
//   return null;
// }
// }


export default Home;
