import React, { useEffect, useState } from "react";
import { getAccounts } from "../services/api";

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAccounts()
      .then(res => setAccounts(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Accounts</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow divide-y divide-gray-200">
          <thead className="bg-yellow-200">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 font-medium">Account #</th>
              <th className="px-4 py-2 text-left text-gray-700 font-medium">Type</th>
              <th className="px-4 py-2 text-left text-gray-700 font-medium">Balance (MAD)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {accounts.map(acc => (
              <tr key={acc.id} className="odd:bg-gray-50">
                <td className="px-4 py-3 text-gray-800">{acc.number}</td>
                <td className="px-4 py-3 text-gray-800">{acc.type}</td>
                <td className="px-4 py-3 text-gray-800">{acc.balance.toLocaleString("fr-MA", { style: "currency", currency: "MAD" })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
