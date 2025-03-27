import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
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

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/gyms/new", {
        name,
        address,
        city,
        neighborhood,
        whatsapp,
        website,
        instagram,
        reelInstagramUrl,
        imageUrl, 
        mapUrl,
        googleRate,
      });
      alert("Login realizado com sucesso!");
    } catch (error) {
      alert("Login falhou. Verifique suas credenciais.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuário"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Endereço"
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cidade"
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bairro"
        onChange={(e) => setNeighborhood(e.target.value)}
      />
      <input
        type="text"
        placeholder="WhatsApp"
        onChange={(e) => setWhatsapp(e.target.value)}
      />
      <input
        type="url"
        placeholder="Website"
        onChange={(e) => setWebsite(e.target.value)}
      />
      <input
        type="text"
        placeholder="Instagram"
        onChange={(e) => setInstagram(e.target.value)}
      />
      <input
        type="url"
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
        placeholder="Mapa (URL)"
        onChange={(e) => setMapUrl(e.target.value)}
      />
      <input
        type="number"
        placeholder="Avaliação no Google"
        min="0"
        max="5"
        step="0.1"
        onChange={(e) => setGoogleRate(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;
