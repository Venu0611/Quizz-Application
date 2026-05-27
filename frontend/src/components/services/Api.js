import axios from "axios";

// Base URL for your Spring Boot application hosted on Railway
const API_URL = 'https://quizz-application-production.up.railway.app'; 

export const addUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/customer`, data);
    return response.data;
  } catch (error) {
    console.log("Error adding user", error.message);
    throw new Error("Could not add user. Please try again.");
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/customers`);
    return response.data; // Fixed to return .data for consistency
  } catch (error) {
    console.log("Error fetching users", error.message);
    throw new Error("Could not fetch users. Please try again.");
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(`${API_URL}/customer/${userId}`);
  } catch (error) {
    console.log("Error deleting user", error.message);
    throw new Error("Could not delete user. Please try again.");
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/customer/${userId}`);
    return response.data;
  } catch (error) {
    console.log(`Error fetching user with ID ${userId}`, error.message);
    throw new Error(`Could not fetch user with ID ${userId}. Please try again.`);
  }
};

export const updateUser = async (userId, data) => {
  try {
    const response = await axios.put(`${API_URL}/customer/${userId}`, data);
    return response.data;
  } catch (error) {
    console.log(`Error updating user with ID ${userId}`, error.message);
    throw new Error(`Could not update user with ID ${userId}. Please try again.`);
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data; 
  } catch (error) {
    console.error("Error logging in", error.message);
    throw error; 
  }
};