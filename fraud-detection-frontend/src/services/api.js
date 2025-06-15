import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api", // Update this to your actual backend URL
});

export const getTransactions = () => API.get("/transactions");
export const getClients = () => API.get("/clients");
export const getAccounts = () => API.get("/accounts");
export const getFrauds = () => API.get("/frauds");