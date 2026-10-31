import "../Styles/DashboardPage.css";
import React, { useEffect, useState } from "react";

import { getPlayers } from "../services/PlayerService";
import { getTeams } from "../services/TeamService";


function DashboardPage() {

    const [players, setPlayers] = useState([]);
    const [teams, setTeams] = useState([]);

    useEffect(() => {

        getPlayers()
            .then((response) => {
                setPlayers(response.data);
            });

        getTeams()
            .then((response) => {
                setTeams(response.data);
            });

    }, []);

    const soldPlayers = players.filter(
        (player) => player.status === "SOLD"
    ).length;

    const availablePlayers = players.filter(
        (player) => player.status === "AVAILABLE"
    ).length;

    const batsmen = players.filter(
        (player) => player.role === "Batsman"
    ).length;

    const bowlers = players.filter(
        (player) => player.role === "Bowler"
    ).length;

    const allRounders = players.filter(
        (player) => player.role === "All-Rounder"
    ).length;

    const wicketKeepers = players.filter(
        (player) => player.role === "WicketKeeper"
    ).length;

   return (

<div className="dashboard-container">

    <h1 className="dashboard-title">
        Dashboard
    </h1>

    <div className="stats-grid">

        <div className="stat-card">
            <div className="stat-number">
                {players.length}
            </div>

            <div className="stat-title">
                Total Players
            </div>
        </div>

        <div className="stat-card">
            <div className="stat-number">
                {soldPlayers}
            </div>

            <div className="stat-title">
                Sold Players
            </div>
        </div>

        <div className="stat-card">
            <div className="stat-number">
                {availablePlayers}
            </div>

            <div className="stat-title">
                Available Players
            </div>
        </div>

        <div className="stat-card">
            <div className="stat-number">
                {teams.length}
            </div>

            <div className="stat-title">
                Total Teams
            </div>
        </div>

    </div>

    <div className="role-card">

        <h2>Player Distribution</h2>

        <div className="role-item">
            <span>Batsmen</span>
            <span>{batsmen}</span>
        </div>

        <div className="role-item">
            <span>Bowlers</span>
            <span>{bowlers}</span>
        </div>

        <div className="role-item">
            <span>All-Rounders</span>
            <span>{allRounders}</span>
        </div>

        <div className="role-item">
            <span>Wicket Keepers</span>
            <span>{wicketKeepers}</span>
        </div>

    </div>

</div>

);

}

export default DashboardPage;