import React, { useEffect, useState } from "react";
import { getPlayers, buyPlayer } from "../services/PlayerService";
import { getTeams } from "../services/TeamService";
import "../Styles/AuctionPage.css";

function AuctionPage() {

    const [players, setPlayers] = useState([]);
    const [teams, setTeams] = useState([]);

    const [playerId, setPlayerId] = useState("");
    const [teamId, setTeamId] = useState("");
    const [price, setPrice] = useState("");
    const [search, setSearch] = useState("");

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


    const handleAuction = (e) => {

    e.preventDefault();

    if(playerId === ""){

        alert("Please select a player");

        return;

    }

    if(teamId === ""){

        alert("Please select a team");

        return;

    }

    if(price === ""){

        alert("Please enter bid price");

        return;

    }

    buyPlayer(playerId, teamId, price)
        .then((response) => {

            alert(response.data);

            setPlayerId("");
            setTeamId("");
            setPrice("");

            window.location.reload();

        })
        .catch((error) => {

            console.error(error);

        });

};


    return (

        <div className="container">

            <h1>Auction Page</h1>

            <input
    type="text"
    placeholder="Search Player"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
/>

<br/><br/>


{
search && (

players.filter((player)=>

    player.name
    .toLowerCase()
    .includes(search.toLowerCase())

).length > 0 ?

players
.filter((player)=>

    player.name
    .toLowerCase()
    .includes(search.toLowerCase())

)
.map((player)=>(

<div
   key={player.id}
   className="search-result"
>

<p>
<b>{player.name}</b>
{" - "}
{player.status}
</p>

</div>

))

:

<p><b>No player found</b></p>

)
}

            <form onSubmit={handleAuction}>

                <label>Select Player:</label>

                <select
                    value={playerId}
                    onChange={(e)=>setPlayerId(e.target.value)}
                    required
                >

                    <option value="">
                        Select Player
                    </option>

                    {players.map((player)=>(
                        <option
                            key={player.id}
                            value={player.id}
                        >
                            {player.name}
                        </option>
                    ))}

                </select>

                <br/><br/>


                <label>Select Team:</label>

                <select
                    value={teamId}
                    onChange={(e)=>setTeamId(e.target.value)}
                    required
                >

                    <option value="">
                        Select Team
                    </option>

                    {teams.map((team)=>(
                        <option
                            key={team.id}
                            value={team.id}
                        >
                            {team.name}
                        </option>
                    ))}

                </select>

                <br/><br/>

                <label>Bid Price:</label>

                <input
                    type="number"
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                    required
                />

                <br/><br/>

                <button type="submit">

                    Buy Player

                </button>

            </form>

        </div>

    );

}

export default AuctionPage;