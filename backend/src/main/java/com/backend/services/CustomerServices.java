package com.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dto.CustomerDTO;
import com.backend.repo.CustomerRepo;

@Service
public class CustomerServices {

    @Autowired
    private CustomerRepo customerRepo;

    // Get all Customers
    public List<CustomerDTO> getAllCustomers() {
        return customerRepo.findAll();
    }
    
    // Create the Customer 
    public CustomerDTO createCustomer(CustomerDTO customerDTO) {
        CustomerDTO customer = new CustomerDTO();
        customer.setName(customerDTO.getName());
        customer.setEmail(customerDTO.getEmail());
        customer.setPassword(customerDTO.getPassword()); // <-- FIXED: Added missing password mapping
        customer.setMobile(customerDTO.getMobile());
        customer.setScore(customerDTO.getScore());
        return customerRepo.save(customer);
    }

    // Get customer details by ID
    public CustomerDTO getCustomerById(Long id) {
        Optional<CustomerDTO> customer = customerRepo.findById(id);
        return customer.orElse(null); 
    }
    
    // Update customer details 
    public CustomerDTO updateCustomer(Long id, CustomerDTO customerDTO) {
        CustomerDTO customer = getCustomerById(id);
        if (customer != null) {
            customer.setName(customerDTO.getName());
            customer.setEmail(customerDTO.getEmail());
            customer.setPassword(customerDTO.getPassword()); // <-- Optional: Allows updating password
            customer.setMobile(customerDTO.getMobile());     // <-- Fixed: Added missing mobile update
            customer.setScore(customerDTO.getScore());
            return customerRepo.save(customer);
        }
        return null; 
    }

    // Delete customer details
    public void deleteCustomer(Long id) {
        customerRepo.deleteById(id);
    }
    
    
 // Add this method inside your CustomerServices class

    public CustomerDTO loginCustomer(String email, String password) {
        // 1. Find user by email
        Optional<CustomerDTO> customerOpt = customerRepo.findByEmail(email);
        
        if (customerOpt.isPresent()) {
            CustomerDTO customer = customerOpt.get();
            // 2. Validate password (Plain text matching for now to match your registration)
            if (customer.getPassword().equals(password)) {
                return customer; // Credentials match!
            }
        }
        return null; // Return null if authentication fails
    }
}