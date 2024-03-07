import axios from "axios";

const token = "your key here";

const api = axios.create({ baseURL: "https://api.github.com/users" });

export { api, token };
