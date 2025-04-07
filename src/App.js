import React, { useState, useEffect } from "react";
import { getGyms } from "./services/gymService";
import GymList from "./components/GymList";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/admin/Login";
import AdminPanel from "./components/admin/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";

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
      color: "red",
      textAlign: "center",
      margin: "20px 0",
    },
  };

  return (
    <Router>
      <Routes>
        {/* Login com layout separado */}
        <Route path="/academias/login" element={<Login />} />

        {/* Rotas principais com layout global (com Header e outros componentes) */}
        <Route
          path="/academias/*"
          element={
            <div>
              <Header />
              {error && <p style={styles.errorMessage}>{error}</p>}
              <Routes>
                {/* Página principal da lista de academias */}
                <Route path="" element={<GymList gyms={gyms} />} />

                {/* Painel administrativo */}
                <Route
                  path="admin"
                  element={
                    <ProtectedRoute>
                      <AdminPanel />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
