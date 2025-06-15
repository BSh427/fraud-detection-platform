//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Accounts from "./pages/Accounts";
import Frauds from "./pages/Frauds";

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", width: "100%" }}></div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/frauds" element={<Frauds />} />
      </Routes>
    </Router>
  );
}

export default App;

