import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}`;




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


export const createGym = async (gym) => {

    try {
        const response = await axios.post(API_URL, gym);
        return response.data;
    } catch (error) {
        console.error('Error creating gym:', error);
        throw error;
    }
};
