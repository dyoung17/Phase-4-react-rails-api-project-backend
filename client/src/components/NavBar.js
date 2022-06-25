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
    fontSize: "14px",
  };

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="navbar">
      <h1 className="main-header">Volunteer Network</h1>
      <div className="nav-links">
        <NavLink
          to="/"
          exact
          className="nav-item"
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
          className="nav-item"
          style={linkStyles}
          activeStyle={{
            background: "lightblue",
          }}
        >
          Find Opportunities
        </NavLink>

        {user ? (
          <button
            style={linkStyles}
            className="nav-item"
            activeStyle={{
              background: "lightblue",
            }}
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink
              to="/signup"
              className="nav-item"
              style={linkStyles}
              activeStyle={{
                background: "lightblue",
              }}
            >
              Sign-Up
            </NavLink>
            <NavLink
              to="/login"
              className="nav-item"
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
