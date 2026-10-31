package com.chandu.ipl_auction_backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.chandu.ipl_auction_backend.entity.Player;
import com.chandu.ipl_auction_backend.repository.PlayerRepository;

@CrossOrigin(origins = {
    "http://localhost:3000",
    "https://ipl-auction-system-three.vercel.app"
})
@RestController
@RequestMapping("/players")
public class PlayerController {

    private final PlayerRepository playerRepository;

    public PlayerController(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    @GetMapping
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    @PostMapping
    public Player addPlayer(@RequestBody Player player) {
        return playerRepository.save(player);
    }

    @PutMapping("/{id}")
    public Player updatePlayer(@PathVariable Long id, @RequestBody Player player) {
        player.setId(id);
        return playerRepository.save(player);
    }

    @DeleteMapping("/{id}")
    public void deletePlayer(@PathVariable Long id) {
        playerRepository.deleteById(id);
    }
}