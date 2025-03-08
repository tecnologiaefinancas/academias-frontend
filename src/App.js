import React, { useState, useEffect } from 'react';
import { getGyms } from './services/gymService';
import GymList from './GymList';
import Header from './Header';
import './App.css'

const App = () => {
    const [gyms, setGyms] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchGyms();
    }, []);

    const fetchGyms = async () => {
        try {
            const data = await getGyms();
            setGyms(data);
            setError(null); 
        } catch (error) {
            console.error("Error fetching gyms:", error);
            setError("Unable to connect to the backend. Please try again later."); 
        }
    };


    const styles = {
        errorMessage: {
            color: 'red',
            textAlign: 'center',
            margin: '20px 0'
        }
    };

    return (
        <div>
            <Header />
            {error && <p style={styles.errorMessage}>{error}</p>} {/* Displays the error message if there is one */}
            <div className="main-content">
                <GymList gyms={gyms} />
            </div>
        </div>
    );
    
};



export default App;
