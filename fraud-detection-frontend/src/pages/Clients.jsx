import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/api/clients")
      .then(res => setClients(res.data))
      .catch(error => console.error("Error fetching clients:", error));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Clients</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow divide-y divide-gray-200">
          <thead className="bg-yellow-200">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-medium">Name</th>
              <th className="px-4 py-2 text-left text-gray-700 font-medium">Email</th>
              <th className="px-4 py-2 text-left text-gray-700 font-medium">Phone</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {clients.map(client => (
              <tr key={client.id} className="odd:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">{client.name}</td>
                <td className="px-4 py-3 text-gray-800">{client.email}</td>
                <td className="px-4 py-3 text-gray-800">{client.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}