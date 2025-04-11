import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function AdminPanel() {
  const {id} = useParams();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [reelInstagramUrl, setReelInstagramUrl] = useState("");
  const [imageUrl, setImageUrl] = useState([""]); 
  const [mapUrl, setMapUrl] = useState("");
  const [googleRate, setGoogleRate] = useState("");

  const handleAddImageUrl = () => {
    setImageUrl([...imageUrl, ""]);
  };

  const handleImageUrlChange = (index, value) => {
    const updatedUrls = [...imageUrl];
    updatedUrls[index] = value;
    setImageUrl(updatedUrls);
  };

  const handleRemoveImageUrl = (index) => {
    const updatedUrls = imageUrl.filter((_, i) => i !== index);
    setImageUrl(updatedUrls);
  };

  useEffect(() => {
    // Carrega os dados da academia se o ID existir
    const fetchGymById = async () => {
      if (id) {
        try {
          const response = await axios.get(`http://localhost:8080/api/gyms/${id}`);
          const gym = response.data;
          setName(gym.name);
          setAddress(gym.address);
          setCity(gym.city);
          setNeighborhood(gym.neighborhood);
          setWhatsapp(gym.whatsapp);
          setWebsite(gym.website);
          setInstagram(gym.instagram);
          setReelInstagramUrl(gym.reelInstagramUrl);
          setImageUrl(gym.imageUrl);
          setMapUrl(gym.mapUrl);
          setGoogleRate(gym.googleRate);
        } catch (error) {
          console.error("Erro ao carregar academia:", error);
        }
      }
    };

    fetchGymById();
  }, [id]);

  const handleSubmit = async () => {
    const payload = { name, address, city, neighborhood, whatsapp, website, instagram, reelInstagramUrl, imageUrl, mapUrl, googleRate };

    try {
      if (id) {
        await axios.put(`http://localhost:8080/api/gyms/edit/${id}`, payload);
        alert("Academia atualizada com sucesso!");
      } else {
        await axios.post("http://localhost:8080/api/gyms/new", payload);
        alert("Academia cadastrada com sucesso!");
      }
    } catch (error) {
      alert("Erro ao enviar informações.");
    }
  };

  return (
    <div className="login-container">
      <h2>Cadastre uma nova academia</h2>
      <input
        type="text"
        value={name}
        placeholder="Nome da Academia"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={address}
        placeholder="Endereço + CEP"
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        value={neighborhood}
        placeholder="Bairro"
        onChange={(e) => setNeighborhood(e.target.value)}
      />
            <input
        type="text"
        value={city}
        placeholder="Cidade"
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        value={whatsapp}
        placeholder="WhatsApp"
        onChange={(e) => setWhatsapp(e.target.value)}
      />
      <input
        type="url"
        value={website}
        placeholder="Website"
        onChange={(e) => setWebsite(e.target.value)}
      />
      <input
        type="text"
        value={instagram}
        placeholder="Instagram"
        onChange={(e) => setInstagram(e.target.value)}
      />
      <input
        type="url"
        value={reelInstagramUrl}
        placeholder="Reel do Instagram (URL)"
        onChange={(e) => setReelInstagramUrl(e.target.value)}
      />
      <div>
        <h3>Imagens da Academia</h3>
        {imageUrl.map((url, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="url"
              placeholder={`URL da Imagem ${index + 1}`}
              value={url}
              onChange={(e) => handleImageUrlChange(index, e.target.value)}
              style={{
                width: "80%",
                padding: "10px",
                marginRight: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
            <button
              onClick={() => handleRemoveImageUrl(index)}
              style={{
                padding: "5px 10px",
                backgroundColor: "#f44336",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Remover
            </button>
          </div>
        ))}
        <button
          onClick={handleAddImageUrl}
          style={{
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Adicionar Imagem
        </button>
      </div>
      <input
        type="url"
        value={mapUrl}
        placeholder="Mapa (URL)"
        onChange={(e) => setMapUrl(e.target.value)}
      />
      <input
        type="number"
        value={googleRate}
        placeholder="Avaliação no Google"
        min="0"
        max="5"
        step="0.1"
        onChange={(e) => setGoogleRate(e.target.value)}
      />
      {id ? (<button onClick={handleSubmit}>Atualizar</button>) : (<button onClick={handleSubmit}>Adicionar</button>)}
      
    </div>
  );
}

export default AdminPanel;
