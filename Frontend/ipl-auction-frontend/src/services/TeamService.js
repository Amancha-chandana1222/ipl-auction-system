import axios from "axios";

const API_URL = "http://localhost:8080/teams";

export const getTeams = () => {
  return axios.get(API_URL);
};

export const addTeam = (team) => {
  return axios.post(API_URL, team);
};