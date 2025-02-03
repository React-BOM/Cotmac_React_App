import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  // Handle sign-out action
  const handleSignOut = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    sessionStorage.removeItem("user"); // Remove user data from sessionStorage
    navigate("/"); // Redirect to login page after sign out
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className="container-fluid">
        {/* Logo - Left */}
        <Link className="navbar-brand" to="/">
          <img
            src="cotmac_logo.jpg" // Replace with your logo image URL
            alt="Logo"
            style={{ height: "50px", width: "50px" }} 
          />
        </Link>

        {/* Navbar Toggle for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Button 1 */}
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            {/* Button 2 */}
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            {/* Button 3 */}
            <li className="nav-item">
              <Link className="nav-link" to="/settings">
                Settings
              </Link>
            </li>
            {/* Sign Out Button - Right */}
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleSignOut}>
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
