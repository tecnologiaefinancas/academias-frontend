import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.appName}>Academias Búzios e Cabo Frio</h1>
    </header>
  );
};

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 30px 10px',
    background: 'linear-gradient(to right,rgb(11, 7, 39), #1c1c1c)', 
    color: '#f5f5dc', 
    width: "100%",
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', 
    fontFamily: "'Raleway', sans-serif",
  },
  appName: {
    fontSize: '26px',
    fontWeight: 'bold',
    fontFamily: "'Poppins', serif",
  },
};

export default Header