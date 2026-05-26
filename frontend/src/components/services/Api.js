import axios from "axios";

const API_URL = 'https://quizz-application-production.up.railway.app'; // Base URL for your Spring Boot application

export const addUser = async (data) => {
  try {
    // The Spring Boot controller's POST endpoint for creating a customer is "customer"
    const response = await axios.post(`${API_URL}/customer`, data);
    return response.data;
  } catch (error) {
    console.log("Error adding user", error.message);
    throw new Error("Could not add user. Please try again.");
  }
}

export const getUsers = async () => {
  try {
    // The Spring Boot controller's GET endpoint for all customers is "customers"
    const response = await axios.get(`${API_URL}/customers`);
    return response;
  } catch (error) {
    console.log("Error fetching users", error.message);
    throw new Error("Could not fetch users. Please try again.");
  }
}

export const deleteUser = async (userId) => {
  try {
    // The Spring Boot controller's DELETE endpoint for a customer by ID is "customer/{id}"
    await axios.delete(`${API_URL}/customer/${userId}`);
  } catch (error) {
    console.log("Error deleting user", error.message);
    throw new Error("Could not delete user. Please try again.");
  }
}

// You might also want to add functions for getting a user by ID and updating a user,
// matching your Spring Boot controller's GET and PUT endpoints.

export const getUserById = async (userId) => {
  try {
    // The Spring Boot controller's GET endpoint for a customer by ID is "customer/{id}"
    const response = await axios.get(`${API_URL}/customer/${userId}`);
    return response.data;
  } catch (error) {
    console.log(`Error fetching user with ID ${userId}`, error.message);
    throw new Error(`Could not fetch user with ID ${userId}. Please try again.`);
  }
}

export const updateUser = async (userId, data) => {
  try {
    // The Spring Boot controller's PUT endpoint for updating a customer by ID is "customer/{id}"
    const response = await axios.put(`${API_URL}/customer/${userId}`, data);
    return response.data;
  } catch (error) {
    console.log(`Error updating user with ID ${userId}`, error.message);
    throw new Error(`Could not update user with ID ${userId}. Please try again.`);
  }
}
export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data; // <-- Return ONLY the data payload
  } catch (error) {
    console.error("Error logging in", error.message);
    // Rethrow the actual server response error so your UI component's catch block can read it
    throw error; 
  }
};