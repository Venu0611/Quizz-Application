package com.backend.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.dto.CustomerDTO;

public interface CustomerRepo extends JpaRepository<CustomerDTO, Long> {
	Optional<CustomerDTO> findByEmail(String email);
	
}