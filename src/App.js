import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Navigate here
import './App.css';
import Login from './Component/login';
import Dashboard from './Component/dashboard';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  </Router>
  );
}

export default App;
