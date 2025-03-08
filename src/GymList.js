import React, { useState, useEffect } from "react";
import { getGyms } from "./services/gymService";
import Icon from "@mdi/react";
import { mdiInstagram, mdiMagnify, mdiMapMarker } from "@mdi/js";
import "./GymList.css";

const GymList = () => {
  const [gyms, setGyms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchGyms = async () => {
      const data = await getGyms();
      setGyms(data);
    };
    fetchGyms();
  }, []);

  // Filtering gyms based on city, neighborhood, or address
  const filteredGyms = gyms.filter(
    (gym) =>
      gym.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (gym.neighborhood && gym.neighborhood.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (gym.city && gym.city.toLowerCase().includes(searchTerm.toLowerCase())) ||
      gym.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const mapUrl = "https://www.google.com/maps/embed?";

  return (
    <div className="gym-list-container">
      {/* Search Input */}
      <div className="search-container">
        <Icon path={mdiMagnify} size="16px" color="#000" /> &nbsp;
        <input
          type="text"
          placeholder="Busque por cidade ou bairro"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <ul>
        {filteredGyms.map((gym) => (
          <li key={gym.id} className="gym-item">
            <div className="gym-details">
              <h2>{gym.title}</h2>
              <p className="p-title">
                <Icon path={mdiMapMarker} size="14px" color="#000" /> Endereço:
              </p>
              <p className="p-answer">{gym.address}, {gym.neighborhood}, {gym.city}. </p>

              <p className="p-title">WhatsApp:</p>
              <p className="p-answer">{gym.whatsapp}</p>
              <p className="p-title">
                <a href={gym.website}>Website</a>
              </p>
              <p className="p-title">
                <Icon path={mdiInstagram} size="14px" color="#000" /> Instagram:
              </p>
              <p className="p-answer">
                <a href={`https://instagram.com/${gym.instagram}`}>
                  {" "} @{gym.instagram}
                </a>
              </p>
              {gym.imageUrl && <img src={gym.imageUrl} alt={gym.title} />}
            </div>
            <div className="gym-map">
              {gym.mapUrl && (
                <iframe
                  src={`${mapUrl}${gym.mapUrl}`}
                  className="responsive-iframe"
                  title="Mapa da Academia" 
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
              <p className="p-answer">
                <a href={gym.googleRate} target="_blank" rel="noopener noreferrer">
                  Ver opiniões
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GymList;
