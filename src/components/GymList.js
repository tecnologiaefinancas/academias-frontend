import React, { useState, useEffect, useRef } from "react";
import { getGyms } from "../services/gymService";
import Icon from "@mdi/react";
import { mdiInstagram, mdiMagnify, mdiMapMarker } from "@mdi/js";
import "./GymList.css";
import GymGallery from "../components/GymGallery";
import InstagramEmbed from "./InstagramReel";
import _ from "lodash";

const GymList = () => {
  const [gyms, setGyms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const debouncedFetchGyms = useRef(
    _.debounce(async (term) => {
      try {
        setIsLoading(true);
        const data = await getGyms(term, term, term, term); 
        setGyms(data);
      } catch (error) {
        console.error("Error to find gyms:", error);
      } finally {
        setIsLoading(false);
      }
    }, 500)
  ).current;

  useEffect(() => {
    debouncedFetchGyms(searchTerm);

    return () => {
      debouncedFetchGyms.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);


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

         {/* Contador */}
         <p>Total: {gyms.length}</p>

      <div className="gym-list-container">
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
      <ul>
        {gyms.map((gym) => (
            <li key={gym.id} className="gym-complete-item">
            <div className="gym-details-container">
            <div className="gym-title">
              <h2>{gym.name}</h2></div>
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
              <div className="opinion">
              <p className="p-answer">
                <a href={gym.googleRate} target="_blank" rel="noopener noreferrer">
                 Ver opiniões
                </a>
              </p>
              </div>
            </div>

              {gym.reelInstagramUrl && (
                            <div className="instagram-reel-container">
                <InstagramEmbed reelId={gym.reelInstagramUrl} />
                </div>
              )}

          </li>
        ))}
      </ul>)}
      </div>
    </div>
  );


};

export default GymList;
