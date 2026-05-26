package com.crudapplication.crud.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crudapplication.crud.dto.CustomerDTO;
import com.crudapplication.crud.entity.Customer;
import com.crudapplication.crud.repo.CustomerRepo;


@Service
public class CustomerServices {

    @Autowired
    private CustomerRepo customerRepo;

    
    //Get the all Customer
    public List<Customer> getAllCustomers() {
        return customerRepo.findAll();
    }

    //Create the Customer 
    public Customer createCustomer(CustomerDTO customerDTO) {
        Customer customer = new Customer();
        customer.setName(customerDTO.getName());
        customer.setEmail(customerDTO.getEmail());
        customer.setPhonenumber(customerDTO.getPhonenumber());
        customer.setPassword(customerDTO.getPassword());
        return customerRepo.save(customer);
    }

    public Customer loginCustomer(String username, String password) {
        return customerRepo.findByNameAndPassword(username, password)
                .or(() -> customerRepo.findByEmailAndPassword(username, password))
                .orElse(null);
    }

    
    //Get the customer details by ID
    public Customer getCustomerById(Long id) {
        Optional<Customer> customer = customerRepo.findById(id);
        return customer.orElse(null); // Handle not found case appropriately
    }
    
    //Update the customerr details 
    public Customer updateCustomer(Long id, CustomerDTO customerDTO) {
        Customer customer = getCustomerById(id);
        if (customer != null) {
            customer.setName(customerDTO.getName());
            customer.setEmail(customerDTO.getEmail());
            customer.setPhonenumber(customerDTO.getPhonenumber());
            return customerRepo.save(customer);
        }
        return null; // Handle not found case appropriately
    }

    
   //Delete the customer details
    public void deleteCustomer(Long id) {
        customerRepo.deleteById(id);
    }
}