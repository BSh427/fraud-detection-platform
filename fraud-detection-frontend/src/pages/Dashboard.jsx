import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [txns, setTxns] = useState([]);
  const [filter, setFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/transactions")
      .then((res) => setTxns(res.data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  const filteredTxns = txns.filter((txn) => {
    const matchesDesc = txn.description.toLowerCase().includes(filter.toLowerCase());
    const matchesStatus = statusFilter === "All" || txn.status === statusFilter;
    return matchesDesc && matchesStatus;
  });

  return (
    <div className="dashboard-container">
      <Navbar />

      <div className="main">
        <header className="dashboard-header">
          <h1>Transactions</h1>
          <div className="filters">
            <input
              type="text"
              placeholder="Search description..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="fraud">Fraud</option>
            </select>
          </div>
        </header>

        {filteredTxns.some((t) => t.status === "fraud") && (
          <div className="alert">⚠️ Fraudulent transactions detected!</div>
        )}

        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount (MAD)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTxns.length === 0 ? (
              <tr>
                <td colSpan="4">No matching transactions found.</td>
              </tr>
            ) : (
              filteredTxns.map((txn) => (
                <tr key={txn.id}>
                  <td>{txn.date}</td>
                  <td>{txn.description}</td>
                  <td>
                    {txn.amount.toLocaleString("fr-MA", {
                      style: "currency",
                      currency: "MAD",
                    })}
                  </td>
                  <td className={`status ${txn.status}`}>{txn.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
