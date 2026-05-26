package com.crudapplication.crud.repo;

import com.crudapplication.crud.entity.Customer; // Import the Customer entity
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface CustomerRepo extends JpaRepository<Customer, Long> {
    Optional<Customer> findByNameAndPassword(String name, String password);
    Optional<Customer> findByEmailAndPassword(String email, String password);
}