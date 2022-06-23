import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            <Route path="/">
              <Home user={user} />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </main>
    </>
  );
}

export default App;
// import React, { useEffect, useState } from "react";
// import { Route, Switch } from "react-router-dom";
// import Login from "./Login";
// import NavBar from "./NavBar";
// import EventsContainer from "./EventsContainer";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);

//   // useEffect(() => {
//   //   fetch("http://localhost:3000/me").then((res) => {
//   //     if (res.ok) {
//   //       res.json().then((user) => {
//   //         setIsAuthenticated(true);
//   //         setUser(user);
//   //       });
//   //     }
//   //   });
//   // }, []);

//   // if (!isAuthenticated)
//   //   return (
//   //     <Login
//   //       error={"please login"}
//   //       setIsAuthenticated={setIsAuthenticated}
//   //       setUser={setUser}
//   //     />
//   //   );

//   return (
//     <div>
//       <NavBar />
//       <Switch>
//         <Route to="/login">
//           <Login />
//         </Route>
//         <Route to="/events">
//           <EventsContainer />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// export default App;
