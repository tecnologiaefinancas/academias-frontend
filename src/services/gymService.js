import axios from 'axios';

const API_URL = 'http://localhost:8080/api/gyms';

export const getGyms = async (searchTerm = "") => {
    try {

        const params = {};
        if (searchTerm) params.searchTerm = searchTerm.trim(); 

        const response = await axios.get(API_URL, { params });
        
        return response.data; 
    } catch (error) {

        console.error("Error to find gyms:", error);
        throw error; 
    }
};


export const createBook = async (gym) => {
    try {
        const response = await axios.post(API_URL, gym);
        return response.data;
    } catch (error) {
        console.error('Error creating gym:', error);
        throw error;
    }
};
