import React, { useState, useEffect } from 'react';
import '../Style/Home.css';


export default function Home() {
  const [showBox, setShowBox] = useState(true);

  const handleClose = () => {
    setShowBox(false);
  };
  const handleOpen = () => {
    setShowBox(true);
  };

  const handleReload = () => {
    setShowBox(true);
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleReload);

    return () => {
      window.removeEventListener('beforeunload', handleReload);
    };
  }, []);

  return (
    <div className='homeBody'>
        {showBox && (
        <div style={{ border: '1px solid black', padding: '10px', marginBottom: '20px' }}>
          <p>This is a closeable box.</p>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
      <button onClick={handleOpen}>open</button>
    </div>
  )
}
