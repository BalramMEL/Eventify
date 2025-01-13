import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development"?  "https://eventify-zkl4.onrender.com/api":"/api",
    // baseURL: import.meta.env.MODE === "development"?  "http://localhost:3000/api":"/api",
    withCredentials: true,
})