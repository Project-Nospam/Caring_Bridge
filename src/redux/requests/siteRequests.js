import axios from "axios";

export function callSite() {
  const config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  };
  return axios
    .get("/api/site", config)
    .then(response => response.data)
    .catch(error => {
      throw error.response || error;
    });
}

export function callSetSite(action) {
  const body = {
    reset: action.payload,
    spam: action.payload,
    notSpam: action.payload
  };
  const config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  };
  return axios
    .put("/api/site/:status", body, config)
    .then(response => response.data)
    .catch(error => {
      throw error.response || error;
    });
}
