package com.crudapplication.crud.repo;

import com.crudapplication.crud.dto.CustomerDTO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<CustomerDTO, Long> {
	Optional<CustomerDTO> findByEmail(String email);
	
}