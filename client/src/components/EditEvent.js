import React, {useState, useEffect} from "react";


function EditEvent({handleUpdateEvent, event} ){
        const [when, setWhen] = useState(event.when);
        // const [name, setName] = useState(name);
        // const [location, setLocation] = useState(location);

    
    
    
        function handleFormSubmit(e) {
            e.preventDefault();
            
             fetch(`/events/${event.id}`, {
               method: "PATCH",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify({
                when,

               }),
             })
               .then((r) => r.json())
               .then((updatedEvents) => handleUpdateEvent(updatedEvents));
          }
    
    
    
    
        return (
        <form className="edit-when" onSubmit={handleFormSubmit}>
            <input  type="text" onChange={(e) => setWhen(e.target.value)} value={when} name="when" placeholder="" />
 
          <input type="submit" value="Save" />
         </form>
        )
      }
    
export default EditEvent;