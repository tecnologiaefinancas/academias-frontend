import { mdiSetCenter } from '@mdi/js';
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.appName}>Academias Buzios e Cabo Frio</h1>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff'
  },
  appName: {
    padding: '10px',
    fontSize: '24px',
    alignItems: 'center',
    width: '70%', 
    margin: '0 auto'
  }
};

export default Header;
