package com.chandu.ipl_auction_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.chandu.ipl_auction_backend.entity.Player;

public interface PlayerRepository extends JpaRepository<Player, Long> {

}