import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user, setUser }) {
  const linkStyles = {
    display: "inline-block",
    width: "120px",
    padding: "12px",
    borderRadius: "18px",
    margin: "6px 6px 6px",
    background: "#9DBA94",
    textDecoration: "none",
    color: "black",
  };
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="navbar-container">
      <h1>Volunteer Network</h1>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "lightblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/events"
        exact
        style={linkStyles}
        activeStyle={{
          background: "lightblue",
        }}
      >
        Events
      </NavLink>
      <div>
        {user ? (
          <button
            style={linkStyles}
            activeStyle={{
              background: "lightblue",
            }}
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink
              to="/signup"
              style={linkStyles}
              activeStyle={{
                background: "lightblue",
              }}
            >
              Signup
            </NavLink>
            <NavLink
              to="/login"
              style={linkStyles}
              activeStyle={{
                background: "lightblue",
              }}
            >
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
