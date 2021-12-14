import axios from "axios";

const Api = axios.create({
  baseURL: "https://api-picinguaba.herokuapp.com/v1",
});

export default Api;