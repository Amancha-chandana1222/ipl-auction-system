package com.chandu.ipl_auction_backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.chandu.ipl_auction_backend.entity.Team;
import com.chandu.ipl_auction_backend.repository.TeamRepository;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/teams")
public class TeamController {

    private final TeamRepository teamRepository;

    public TeamController(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @GetMapping
    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    @PostMapping
    public Team addTeam(@RequestBody Team team) {
        return teamRepository.save(team);
    }

    @PutMapping("/{id}")
    public Team updateTeam(@PathVariable Long id, @RequestBody Team team) {
        team.setId(id);
        return teamRepository.save(team);
    }

    @DeleteMapping("/{id}")
    public void deleteTeam(@PathVariable Long id) {
        teamRepository.deleteById(id);
    }
}