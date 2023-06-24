package com.example.minhmarket.repository;

import com.example.minhmarket.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Integer> {
    Optional<Account> findByName(String username);

    Boolean existsByName(String username);
}
