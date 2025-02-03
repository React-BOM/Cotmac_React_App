import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./configuration.css"; // Import new CSS
import Navbar from "./Navbar";
import Footer1 from "./footer1";

const Configuration = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <>
      <Navbar />
      <div className="config-container">
        {/* Home Button */}
        <button className="home-button" onClick={() => navigate("/dashboard")}>
          Home
        </button>

        <div className="container mt-5">
          <table className="table table-bordered config-table">
            <thead>
              <tr>
                <th>Specification</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Number of ST Co</td>
                <td><input type="text" className="config-input" /></td>
              </tr>
              <tr>
                <td>HF</td>
                <td><input type="text" className="config-input" /></td>
              </tr>
              <tr>
                <td>ST</td>
                <td><input type="text" className="config-input" /></td>
              </tr>
              <tr>
                <td>Actual Module Count</td>
                <td><input type="text" className="config-input" /></td>
              </tr>
              <tr>
                <td>IM Red</td>
                <td><input type="text" className="config-input" /></td>
              </tr>
              <tr>
                <td>CPU Red</td>
                <td><input type="text" className="config-input" /></td>
              </tr>
              <tr>
                <td>Profibus</td>
                <td><input type="text" className="config-input" /></td>
              </tr>
              <tr>
                <td>AI HART</td>
                <td><input type="text" className="config-input" /></td>
              </tr>
              <tr>
                <td>AO HART</td>
                <td><input type="text" className="config-input" /></td>
              </tr>
              <tr>
                <td>MRP</td>
                <td><input type="text" className="config-input" /></td>
              </tr>
              <tr>
                <td>AUX Terminal Base</td>
                <td><input type="text" className="config-input" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Configuration;
