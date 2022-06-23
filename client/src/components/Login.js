import React, { useState } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

// import React, { useState } from "react";
// import Auth from "./Auth";

// function Login({ setUser, setIsAuthenticated }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const [error, setError] = useState([]);

//   function onSubmit(e) {
//     e.preventDefault();
//     const user = {
//       username: username,
//       password,
//     };

//     fetch(`/login`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(user),
//     }).then((res) => {
//       if (res.ok) {
//         res.json().then((user) => {
//           setUser(user);
//           setIsAuthenticated(true);
//         });
//       } else {
//         res.json().then((json) => setError(json.error));
//       }
//     });
//   }
//   return (
//     <div className="login-container">
//       <form onSubmit={onSubmit}>
//         <label>
//           Username
//           <input
//             name="username"
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             name="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button type="submit">Log in</button>
//       </form>
//       {error ? <div>{error}</div> : null}
//       <Auth setUser={setUser} setIsAuthenticated={setUser} />
//     </div>
//   );
// }

// export default Login;
