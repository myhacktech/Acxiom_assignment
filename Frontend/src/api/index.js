import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5000", //http://localhost:7000 https://acxiom-assignment.vercel.app
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});
export const logIn = (authData) => API.post("/auth/login", authData);

export const signUp = (authData) => API.post("/auth/signup", authData);
