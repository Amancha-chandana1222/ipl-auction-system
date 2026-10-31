import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "./App.css";

import PlayersPage from "./pages/PlayersPage";
import TeamsPage from "./pages/TeamsPage";
import AuctionPage from "./pages/AuctionPage";
import Navbar from "./components/Navbar";
import DashboardPage from "./pages/DashboardPage";

function App() {

  return (

    <BrowserRouter>

      <div className="App">

        <Navbar />

        <h1>
          IPL Auction System
        </h1>

        <Routes>

          <Route
    path="/"
    element={<DashboardPage />}
/>

          <Route
            path="/players"
            element={<PlayersPage />}
          />

          <Route
            path="/teams"
            element={<TeamsPage />}
          />

          <Route
            path="/auction"
            element={<AuctionPage />}
          />

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default App;