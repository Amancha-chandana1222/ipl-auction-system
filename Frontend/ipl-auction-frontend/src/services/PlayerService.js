import axios from "axios";

const API_URL = "https://ipl-auction-system-ynqj.onrender.com";

export const getPlayers = () => {
  return axios.get(`${API_URL}/players`);
};

export const addPlayer = (player) => {
  return axios.post(`${API_URL}/players`, player);
};

export const buyPlayer = (playerId, teamId, price) => {
  return axios.post(
    `${API_URL}/auction/buy?playerId=${playerId}&teamId=${teamId}&price=${price}`
  );
};