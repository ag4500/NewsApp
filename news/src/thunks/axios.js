import axios from "axios";

const client = axios.create({
  baseURL: "https://newsapi.org/"
});

export default client;
