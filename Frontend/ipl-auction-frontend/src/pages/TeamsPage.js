import React, { useEffect, useState } from "react";
import { getTeams, addTeam } from "../services/TeamService";
import "../Styles/TeamsPage.css";

function TeamsPage() {

  // Store teams list
  const [teams, setTeams] = useState([]);

  // Form states
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");

  // Fetch all teams
  const fetchTeams = () => {
    getTeams()
      .then((response) => {
        setTeams(response.data);
      })
      .catch((error) => {
        console.error("Error fetching teams:", error);
      });
  };

  // Run when component loads
  useEffect(() => {
    fetchTeams();
  }, []);

  // Handle form submit
 const handleSubmit = (e) => {

    e.preventDefault();

    // Validation

    if(name.trim() === ""){

        alert("Team name is required");

        return;

    }

    if(budget === ""){

        alert("Budget is required");

        return;

    }

    const newTeam = {

        name: name,
        budget: Number(budget)

    };

    addTeam(newTeam)
        .then(() => {

            setName("");
            setBudget("");

            fetchTeams();

        })
        .catch((error) => {

            console.error(error);

        });

};
  return (
    <div className="container">

      <h1>Teams Page</h1>

      {/* Team Form */}
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Team Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
        />

        <button type="submit">Add Team</button>

      </form>

      <hr />

      {/* Teams Table */}
      {teams.length === 0 ? (
        <p>No teams found</p>
      ) : (
        <table border="1" cellPadding="10">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Remaining Budget</th>
            </tr>
          </thead>

          <tbody>
            {teams.map((team) => (
              <tr key={team.id}>
                <td>{team.id}</td>
                <td>

<img
    src={`/logos/${team.name.toUpperCase()}.png`}
    alt={team.name}
    width="40"
    height="40"
    style={{
        verticalAlign: "middle",
        marginRight: "10px"
    }}
/>

{team.name}

</td>
                <td
className={

    team.budget < 30000000

    ?

    "low-budget"

    :

    team.budget < 70000000

    ?

    "medium-budget"

    :

    "high-budget"

}
>

₹ {team.budget}

</td>
              </tr>
            ))}
          </tbody>

        </table>
      )}

    </div>
  );
}

export default TeamsPage;