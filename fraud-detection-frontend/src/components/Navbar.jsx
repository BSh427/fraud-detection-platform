import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ABB Admin</div>
      <div className="links">
        <Link to="/">Dashboard</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/accounts">Accounts</Link>
        <Link to="/agencies">Agencies</Link>
        <Link to="/frauds">Frauds</Link>
      </div>
    </nav>
  );
}