package com.chandu.ipl_auction_backend.controller;

import com.chandu.ipl_auction_backend.entity.Player;
import com.chandu.ipl_auction_backend.entity.Team;
import com.chandu.ipl_auction_backend.repository.PlayerRepository;
import com.chandu.ipl_auction_backend.repository.TeamRepository;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auction")
@CrossOrigin(origins = {
"http://localhost:3000",
"https://ipl-auction-system-three.vercel.app"
})
public class AuctionController {

private final PlayerRepository playerRepository;
private final TeamRepository teamRepository;

// Constructor Injection
public AuctionController(PlayerRepository playerRepository,
                         TeamRepository teamRepository) {

    this.playerRepository = playerRepository;
    this.teamRepository = teamRepository;
}

@PostMapping("/buy")
public String buyPlayer(@RequestParam Long playerId,
                        @RequestParam Long teamId,
                        @RequestParam double price) {

    try {

        Player player = playerRepository
                .findById(playerId)
                .orElse(null);

        Team team = teamRepository
                .findById(teamId)
                .orElse(null);

        if (player == null || team == null) {
            return "Player or Team not found";
        }

        if ("SOLD".equals(player.getStatus())) {
            return "Player already sold";
        }

        // Validate bid price
        if (price <= 0) {
            return "Bid price must be greater than zero";
        }

        // Bid must not be less than base price
        if (price < player.getBasePrice()) {
            return "Bid price cannot be less than base price";
        }

        // Check team budget
        if (team.getBudget() < price) {
            return "Not enough budget";
        }

        // Purchase player
        player.setTeam(team);
        player.setSoldPrice(price);
        player.setStatus("SOLD");

        // Deduct team budget
        team.setBudget(team.getBudget() - price);

        teamRepository.save(team);
        playerRepository.save(player);

        return "Player bought successfully";

    } catch (Exception e) {

        return "Error: " + e.getMessage();

    }
}

}
