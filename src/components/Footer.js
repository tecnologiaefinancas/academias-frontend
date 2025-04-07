import React from "react";

const styles = {
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 20px",
    background: "linear-gradient(to right, rgb(11, 7, 39), #1c1c1c)",
    color: "#f5f5dc",
    boxShadow: "0 -4px 15px rgba(0, 0, 0, 0.3)",
    fontFamily: "'Raleway', sans-serif",
    bottom: 0,
    width: "100%",
    textAlign: "center",
  },
  footerText: {
    fontSize: "14px",
    fontWeight: "bold",
    fontFamily: "'Poppins', serif",
  },
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>© 2025 Academias Búzios e Cabo Frio</p>
    </footer>
  );
};

export default Footer;