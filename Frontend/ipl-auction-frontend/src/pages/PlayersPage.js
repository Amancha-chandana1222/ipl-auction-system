import React, { useEffect, useState } from "react";

import { getPlayers, addPlayer } from "../services/PlayerService";

import "../Styles/PlayersPage.css";

function PlayersPage() {

  const [players, setPlayers] = useState([]);

  // Form state

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [basePrice, setBasePrice] = useState("");

  // Search state

  const [search, setSearch] = useState("");

  // Role filter state

  const [selectedRole, setSelectedRole] = useState("All");


  // Fetch players

  const fetchPlayers = () => {

    getPlayers()
      .then((response) => {

        setPlayers(response.data);

      })
      .catch((error) => {

        console.error(error);

      });

  };


  useEffect(() => {

    fetchPlayers();

  }, []);


  // Handle form submit

  const handleSubmit = (e) => {

    e.preventDefault();

    if(name.trim() === ""){

        alert("Player name is required");

        return;

    }

    if(role.trim() === ""){

        alert("Player role is required");

        return;

    }

    if(basePrice === ""){

        alert("Base price is required");

        return;

    }

    const newPlayer = {

        name: name,
        role: role,
        basePrice: Number(basePrice),
        soldPrice: 0,
        status: "AVAILABLE"

    };

    addPlayer(newPlayer)
        .then(() => {

            setName("");
            setRole("");
            setBasePrice("");

            fetchPlayers();

        })
        .catch((error) => {

            console.error(error);

        });

};


  return (

    <div className="container">

      <h1>Players Page</h1>


      {/* Search Box */}

      <input
        type="text"
        placeholder="Search Player"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <br/><br/>


      {/* Role Filter */}

      <select
        value={selectedRole}
        onChange={(e)=>setSelectedRole(e.target.value)}
      >

        <option value="All">
          All
        </option>

        <option value="Batsman">
          Batsman
        </option>

        <option value="Bowler">
          Bowler
        </option>

        <option value="All-Rounder">
          All-Rounder
        </option>

        <option value="WicketKeeper">
          WicketKeeper
        </option>

      </select>

      <br/><br/>


      {/* Form */}

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e)=>setRole(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Base Price"
          value={basePrice}
          onChange={(e)=>setBasePrice(e.target.value)}
          required
        />

        <button type="submit">

          Add Player

        </button>

      </form>

      <hr/>


      {/* Players Container */}

      <div className="players-container">

      {

      players.filter((player)=>

          player.name
          .toLowerCase()
          .includes(search.toLowerCase())

          &&

          (

            selectedRole==="All"

            ||

            player.role===selectedRole

            ||

            (
              player.role==="All-Rounder"

              &&

              (
                selectedRole==="Batsman"
                ||
                selectedRole==="Bowler"
                ||
                selectedRole==="WicketKeeper"
              )
            )

          )

      ).length > 0 ?

      players
      .filter((player)=>

          player.name
          .toLowerCase()
          .includes(search.toLowerCase())

          &&

          (

            selectedRole==="All"

            ||

            player.role===selectedRole

            ||

            (
              player.role==="All-Rounder"

              &&

              (
                selectedRole==="Batsman"
                ||
                selectedRole==="Bowler"
                ||
                selectedRole==="WicketKeeper"
              )
            )

          )

      )
      .map((player)=>(

      <div
        key={player.id}
        className="player-card"
      >

          <h3>{player.name}</h3>

          <p>

            <b>Role:</b> {player.role}

          </p>

          <p>

            <b>Base Price:</b> ₹ {player.basePrice}

          </p>

          <p>

            <b>Sold Price:</b> ₹ {player.soldPrice}

          </p>

          <p>

            <b>Status:</b>

            <span
              className={
                player.status==="SOLD"
                ?
                "sold"
                :
                "available"
              }
            >

              {" "}

              {player.status}

            </span>

          </p>

      </div>

      ))

      :

      <p>

        <b>No player found</b>

      </p>

      }

      </div>

    </div>

  );

}

export default PlayersPage;