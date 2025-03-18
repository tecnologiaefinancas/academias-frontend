import axios from 'axios';

const API_URL = 'http://localhost:8080/api/gyms';

export const getGyms = async (city = "", neighborhood = "") => {
    try {
        const params = {};
        if (city) params.city = city;
        if (neighborhood) params.neighborhood = neighborhood;


        const response = await axios.get(API_URL, { params });
        return response.data; 
    } catch (error) {
        console.error("Error fetching gyms:", error);
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
