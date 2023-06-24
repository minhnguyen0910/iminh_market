package com.example.minhmarket.repository;

import com.example.minhmarket.model.Role;
import com.example.minhmarket.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(RoleName name);
}
