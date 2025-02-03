import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Navigation hook

  const handleLogin = async (e) => {
    e.preventDefault();

    // Make API call to your backend server
    //API call from backend\server.js
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // If login is successful, navigate to the dashboard
        navigate("/dashboard");
      } else {
        // If credentials are invalid, show the error message
        setError(data.error || "Invalid username or password");
      }
    } catch (err) {
      // Handle any errors, like network issues
      setError("Server error, please try again later.");
      console.error("Error during login:", err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="d-flex flex-column flex-md-row bg-white shadow-lg rounded overflow-hidden w-75 w-md-50"
        style={{ minHeight: "500px" }}
      >
        {/* Left Side - Image */}
        <div className="w-100 w-md-50" style={{ minHeight: "500px" }}>
          <img
            src="cotmac_logo.jpg" // Replace with your image URL
            alt="Login"
            className="img-fluid h-100"
          />
        </div>

        {/* Right Side - Form */}
        <div
          className="w-100 w-md-50 p-4 d-flex flex-column justify-content-center align-items-center"
          style={{ minHeight: "500px" }}
        >
          <div className="w-75">
            <h2 className="text-center mb-3">Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="****@cotmac.io"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
