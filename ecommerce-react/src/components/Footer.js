import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#000',
      color: '#fff',
      padding: '2rem 0',
      marginTop: 'auto',
      width: '100%'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>DRIPIFY</h3>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ margin: 0 }}>
              <strong>Mobile:</strong> 1234567890
            </p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ margin: 0 }}>
              <strong>Email:</strong> customersupport@dripify.online
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;