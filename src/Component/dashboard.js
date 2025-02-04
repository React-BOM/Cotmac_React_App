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
              <td><input placeholder="DI"></input></td>
              <td><input placeholder="DO"></input></td>
              <td><input placeholder="AI"></input></td>
              <td><input placeholder="AI HART"></input></td>
              <td><input placeholder="T/C"></input></td>
              <td><input placeholder="RTD"></input></td>
              <td><input placeholder="AO"></input></td>
              <td><input placeholder="AD H"></input></td>
              <td><input placeholder="M RTU"></input></td>
            </tr>
            <tr className="output-row">
              <td><input placeholder="%"></input></td>
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

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./footer1";
// import Calculation from "./calculation";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   // State for each input field
//   const [di, setDi] = useState("");
//   const [doValue, setDoValue] = useState("");
//   const [ai, setAi] = useState("");
//   const [aiHart, setAiHart] = useState("");
//   const [tc, setTc] = useState("");
//   const [rtd, setRtd] = useState("");
//   const [ao, setAo] = useState("");
//   const [adh, setAdh] = useState("");
//   const [mrtu, setMrtu] = useState("");

//   return (
//     <>
//       <Navbar />
//       <div className="dashboard-container">
//         <button className="config-button" onClick={() => navigate("/configuration")}>
//           Configuration
//         </button>
//         <div className="container mt-5">
//           <table className="table table-bordered custom-table">
//             <thead>
//               <tr>
//                 <th>Specification</th>
//                 <th>DI</th>
//                 <th>DO</th>
//                 <th>AI</th>
//                 <th>AI HART</th>
//                 <th>T/C</th>
//                 <th>RTD</th>
//                 <th>AO</th>
//                 <th>AD H</th>
//                 <th>M RTU</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="input-row">
//                 <td>Actual I/O</td>
//                 <td><input value={di} onChange={(e) => setDi(e.target.value)} placeholder="DI" /></td>
//                 <td><input value={doValue} onChange={(e) => setDoValue(e.target.value)} placeholder="DO" /></td>
//                 <td><input value={ai} onChange={(e) => setAi(e.target.value)} placeholder="AI" /></td>
//                 <td><input value={aiHart} onChange={(e) => setAiHart(e.target.value)} placeholder="AI HART" /></td>
//                 <td><input value={tc} onChange={(e) => setTc(e.target.value)} placeholder="T/C" /></td>
//                 <td><input value={rtd} onChange={(e) => setRtd(e.target.value)} placeholder="RTD" /></td>
//                 <td><input value={ao} onChange={(e) => setAo(e.target.value)} placeholder="AO" /></td>
//                 <td><input value={adh} onChange={(e) => setAdh(e.target.value)} placeholder="AD H" /></td>
//                 <td><input value={mrtu} onChange={(e) => setMrtu(e.target.value)} placeholder="M RTU" /></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Passing each input separately */}
//         <Calculation di={di} doValue={doValue} ai={ai} aiHart={aiHart} tc={tc} rtd={rtd} ao={ao} adh={adh} mrtu={mrtu} />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Dashboard;
