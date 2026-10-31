import axios from "axios";

const API_URL = "https://ipl-auction-system-ynqj.onrender.com";

export const getTeams = () => {
  return axios.get(`${API_URL}/teams`);
};

export const addTeam = (team) => {
  return axios.post(`${API_URL}/teams`, team);
};