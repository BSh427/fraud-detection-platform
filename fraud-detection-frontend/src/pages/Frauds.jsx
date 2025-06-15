import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Frauds() {
  const [frauds, setFrauds] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/api/frauds")
      .then(res => setFrauds(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Fraud Predictions</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow divide-y divide-gray-200">
          <thead className="bg-yellow-200">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-medium">Transaction</th>
              <th className="px-4 py-2 text-left text-gray-700 font-medium">Score</th>
              <th className="px-4 py-2 text-left text-gray-700 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {frauds.map(fraud => (
              <tr key={fraud.id} className="odd:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">{fraud.transactionId}</td>
                <td className="px-4 py-3 text-gray-800">{fraud.score}</td>
                <td className={`px-4 py-3 font-semibold ${
                  fraud.status === "fraud" ? "text-red-600" : "text-green-600"
                }`}>
                  {fraud.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
