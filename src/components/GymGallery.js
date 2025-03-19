import React, { useState } from "react";

const GymGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = images && images.length > 0 ? images : ["https://placehold.co/150"];

  const openImage = (image) => {
    setSelectedImage(image); 
  };

  const closeImage = () => {
    setSelectedImage(null); 
  };

  return (
    <div>
      <div className="thumbnails">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => openImage(image)}
            style={{
              width: "100px",
              cursor: "pointer",
              margin: "5px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
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
            zIndex: 1000,
          }}
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Imagem Ampliada"
            style={{ maxHeight: "90%", maxWidth: "90%", borderRadius: "8px" }}
          />
          <button
            onClick={closeImage}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "white",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
};

export default GymGallery;
