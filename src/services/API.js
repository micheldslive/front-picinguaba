import axios from "axios";

export const Api = axios.create({
  baseURL: "https://api-picinguaba.herokuapp.com/v1",
});