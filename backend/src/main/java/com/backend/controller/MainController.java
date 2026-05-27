package com.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.backend.dto.CustomerDTO;
import com.backend.services.CustomerServices;

import java.util.List;

@RestController
@CrossOrigin(origins = "https://quizz-application-gold.vercel.app", allowCredentials = "true")
public class MainController {

    @Autowired
    private CustomerServices customerServices;

    @GetMapping("customers")
    public List<CustomerDTO> getAllCustomers() {
        return customerServices.getAllCustomers();
    }

    @PostMapping("customer")
    public ResponseEntity<CustomerDTO> createCustomer(@RequestBody CustomerDTO customerDTO) {
    	CustomerDTO customer = customerServices.createCustomer(customerDTO);
        return ResponseEntity.ok(customer);
    }

    @GetMapping("customer/{id}")
    public ResponseEntity<CustomerDTO> getCustomerById(@PathVariable Long id) {
        return ResponseEntity.ok(customerServices.getCustomerById(id));
    }

    @PutMapping("customer/{id}")
    public ResponseEntity<CustomerDTO> updateCustomer(@PathVariable Long id, @RequestBody CustomerDTO customerDTO) {
    	CustomerDTO updatedCustomer = customerServices.updateCustomer(id, customerDTO);
        return ResponseEntity.ok(updatedCustomer);
    }

    @DeleteMapping("customer/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
        customerServices.deleteCustomer(id);
        return ResponseEntity.noContent().build();
    }
    
    @PostMapping("login")
    public ResponseEntity<?> loginCustomer(@RequestBody CustomerDTO loginRequest) {
        CustomerDTO authenticatedCustomer = customerServices.loginCustomer(
            loginRequest.getEmail(), 
            loginRequest.getPassword()
        );

        if (authenticatedCustomer != null) {
            // Return 200 OK along with user data so React can save it to localStorage
            return ResponseEntity.ok(authenticatedCustomer);
        } else {
            // Return 401 Unauthorized if verification fails
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }
}