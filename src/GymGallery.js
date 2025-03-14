import React, { useState } from "react";
import vitality from "./assets/images/vitality01.png"; 

const GymGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    vitality, // Imagem 1
    "https://placehold.co/150", // Imagem 2
    "https://placehold.co/150", // Imagem 3
    "https://placehold.co/150", // Imagem 4
    "https://placehold.co/150", // Imagem 5
  ];

  const openImage = (image) => {
    setSelectedImage(image); // Abre a imagem selecionada
  };

  const closeImage = () => {
    setSelectedImage(null); // Fecha a imagem ao clicar
  };

  return (
    <div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => openImage(image)}
            style={{ width: "100px", cursor: "pointer", margin: "5px" }}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Full View"
            style={{ maxHeight: "90%", maxWidth: "90%" }}
          />
        </div>
      )}
    </div>
  );
};

export default GymGallery;
