import axios from "axios";

export const Api = axios.create({
  baseURL: "http://localhost:3500/api",
});