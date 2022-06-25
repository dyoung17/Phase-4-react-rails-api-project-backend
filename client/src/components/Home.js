import React, {useState, useEffect } from "react";

import VolunteerEvents from "./VolunteerEvents" 

function Home({ volunteer }) {
   const [volunteerEvents, setVolunteerEvents] = useState([]);

   useEffect(() => {
    if (volunteer?.id) {
      fetch(`/volunteers/${volunteer.id}`)
      .then(r => r.json())
       .then(volunteer => setVolunteerEvents(volunteer.events));
    };  
   }, [volunteer?.id])

   console.log('voluenteer evets', volunteerEvents)
    
  return (
    <div>
      {volunteerEvents.map((event) => {
        return <VolunteerEvents event={event} key={event.id} />;
       })};
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
