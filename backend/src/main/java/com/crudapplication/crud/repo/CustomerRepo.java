package com.crudapplication.crud.repo;

import com.crudapplication.crud.entity.Customer; // Import the Customer entity
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer, Long> {
	
}