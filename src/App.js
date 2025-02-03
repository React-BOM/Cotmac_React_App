import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Navigate here
import './App.css';
import Login from './Component/login';
import Dashboard from './Component/dashboard';
import Configuration from "./Component/Configuration";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/configuration" element={<Configuration/>}/>
    </Routes>
  </Router>
  );
}

export default App;
