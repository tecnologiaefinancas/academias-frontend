import React, { useState, useEffect } from "react";
import { getGyms } from "./services/gymService";
import Icon from "@mdi/react";
import { mdiInstagram } from "@mdi/js";
import "./GymList.css";

const GymList = () => {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    const fetchGyms = async () => {
      const data = await getGyms();
      setGyms(data);
    };
    fetchGyms();
  }, []);

  const mapUrl = "https://www.google.com/maps/embed?";

  return (
    <div className="gym-list-container">
      <ul>
        {gyms.map((gym) => (
          <li key={gym.id} className="gym-item">
            <div className="gym-details">
              <h2>{gym.title}</h2>
              <p className="p-title">Endereço</p>
              <p className="p-answer">{gym.address}</p>
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
                  {" "}
                  @{gym.instagram}
                </a>
              </p>
              {gym.imageUrl && <img src={gym.imageUrl} alt={gym.title} />}
            </div>
            <div className="gym-map">
              {gym.mapUrl && (
                <iframe
                  src={`${mapUrl}${gym.mapUrl}`}
                  width="400"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
              <p className="p-answer">
                <a href={gym.googleRate} target="no_blank">
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
