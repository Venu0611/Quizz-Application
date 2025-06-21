package com.crudapplication.crud.controller;

import com.crudapplication.crud.dto.CustomerDTO;
import com.crudapplication.crud.entity.Customer;
import com.crudapplication.crud.services.CustomerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class MainController {

    @Autowired
    private CustomerServices customerServices;

    @GetMapping("customers")
    public List<Customer> getAllCustomers() {
        return customerServices.getAllCustomers();
    }

    @PostMapping("customer")
    public ResponseEntity<Customer> createCustomer(@RequestBody CustomerDTO customerDTO) {
        Customer customer = customerServices.createCustomer(customerDTO);
        return ResponseEntity.ok(customer);
    }

    @GetMapping("customer/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
        return ResponseEntity.ok(customerServices.getCustomerById(id));
    }

    @PutMapping("customer/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Long id, @RequestBody CustomerDTO customerDTO) {
        Customer updatedCustomer = customerServices.updateCustomer(id, customerDTO);
        return ResponseEntity.ok(updatedCustomer);
    }

    @DeleteMapping("customer/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
        customerServices.deleteCustomer(id);
        return ResponseEntity.noContent().build();
    }
}