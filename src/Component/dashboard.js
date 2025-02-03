import Navbar from "./Navbar";
import './Dashboard.css';
import { useNavigate } from "react-router-dom";
import Footer from "./footer1";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <div className="dashboard-container">
    <button className="config-button" onClick={() => navigate("/configuration")}>Configuration</button>
      <div className="container mt-5">
        <table className="table table-bordered custom-table">
          <thead>
            <tr>
              <th>Specification</th>
              <th>DI</th>
              <th>DO</th>
              <th>AI</th>
              <th>AI HART</th>
              <th>T/C</th>
              <th>RTD</th>
              <th>AO</th>
              <th>AD H</th>
              <th>M RTU</th>
            </tr>
          </thead>
          <tbody> 
            <tr className="input-row">
              <td>Actual I/O</td>
              <td><input></input></td>
              <td><input></input></td>
              <td><input></input></td>
              <td><input></input></td>
              <td><input></input></td>
              <td><input></input></td>
              <td><input></input></td>
              <td><input></input></td>
              <td><input></input></td>
            </tr>
            <tr className="output-row">
              <td><input></input></td>
              <td><span>0</span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
            </tr>
            <tr className="output-row">
              <td>Total I/O With Spare</td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
            </tr>
            <tr className="output-row">
              <td>16</td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
            </tr>
            <tr className="output-row">
              <td>8</td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
            </tr>
            <tr className="output-row">
              <td>4</td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
            </tr>
            <tr className="output-row">
              <td>Total I/O Offered</td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
            </tr>
            <tr className="output-row">
              <td>Tag Req</td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
            </tr>
            <tr className="output-row">
              <td>Total Tags</td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
              <td><span></span></td>
            </tr>                        
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Dashboard;
