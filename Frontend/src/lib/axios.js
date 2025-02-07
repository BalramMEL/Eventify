import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:3000/api"
    : "https://eventify-zkl4.onrender.com/api",
  withCredentials: true, // Include cookies/credentials
  headers: {
    "Content-Type": "application/json",
  },
});
