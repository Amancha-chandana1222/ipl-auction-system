import axios from "axios";

const API_URL = "http://localhost:8080/players";

export const getPlayers = () => {
  return axios.get(API_URL);
};
export const addPlayer = (player) => {
  return axios.post(API_URL, player);
};
export const buyPlayer = (playerId, teamId, price) => {
    return axios.post(
        `http://localhost:8080/auction/buy?playerId=${playerId}&teamId=${teamId}&price=${price}`
    );
};