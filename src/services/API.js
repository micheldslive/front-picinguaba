import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-picinguaba.herokuapp.com/v1",
});