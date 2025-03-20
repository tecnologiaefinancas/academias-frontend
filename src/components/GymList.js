import React, { useState, useEffect } from "react";
import { getGyms } from "../services/gymService";
import Icon from "@mdi/react";
import { mdiInstagram, mdiMagnify, mdiMapMarker } from "@mdi/js";
import "./GymList.css";
import GymGallery from "../components/GymGallery";
import InstagramEmbed from "./InstagramReel";

const GymList = () => {
  const [gyms, setGyms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchGyms = async () => {
      try {
        const data = await getGyms(searchTerm, searchTerm);
        setGyms(data);
      } catch (error) {
        console.error("Erro ao buscar academias:", error);
      }
    };

    fetchGyms();
  }, [searchTerm]); // Atualiza a lista de academias sempre que o searchTerm mudar

  const mapUrl = "https://www.google.com/maps/embed?";

  return (
    <div className="gym-wrapper">
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

      <div className="gym-list-container">
      <ul>
        {gyms.map((gym) => (
            <li key={gym.id} className="gym-complete-item">
            <div className="gym-details-container">
           
              <h2>{gym.name}</h2>
              <p className="p-title">
                <Icon path={mdiMapMarker} size="14px" color="#000" /> Endereço:
              </p>
              <p className="p-answer">{gym.address}, {gym.neighborhood}, {gym.city}. </p>

              <p className="p-title">WhatsApp:</p>
              <p className="p-answer">{gym.phone}</p>
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
              <p className="p-title">Fotos:</p>
              <GymGallery images={gym.imageUrl} />
              
              <br></br>
     
            </div>
            <div className="map-container">
              {gym.mapUrl && (
                <iframe
                  src={`${mapUrl}${gym.mapUrl}`}
                  className="responsive-iframe-map"
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
            <div className="instagram-reel-container">
              {gym.reelInstagramUrl && (
                <InstagramEmbed reelId={gym.reelInstagramUrl} />
              )}</div>

          </li>
        ))}
      </ul>
      </div>
    </div>
  );


};

export default GymList;
