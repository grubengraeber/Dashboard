import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const buildAuthHeader = (auth) => {
  console.log("build header" + auth.auth.accessToken)
  return { 'Authorization': 'Bearer ' + auth.auth.accessToken }
}

export default axios.create({
  baseURL: BASE_URL,
});
