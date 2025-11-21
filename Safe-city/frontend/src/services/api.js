import axios from "axios";

const api = axios.create({
  // Hardcoding the Render URL to force the connection
  baseURL: "https://safecity-2u94.onrender.com/api",
  withCredentials: true,
});

export default api;
