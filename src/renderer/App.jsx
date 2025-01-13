import React, { useState } from 'react';
import './styles.css';
import { X, Minus, LayoutGrid } from 'lucide-react';

function App() {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    // Aquí eventualmente implementaremos la lógica real de minimización
  };

  return (
    <div className="window-hub">
      <div className="hub-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <LayoutGrid size={20} color="white" />
          <span style={{ color: 'white', fontSize: '14px' }}>Window Hub</span>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={handleMinimize}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px',
            }}
          >
            <Minus size={16} color="white" />
          </button>
          <button
            onClick={() => window.close()}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px',
            }}
          >
            <X size={16} color="white" />
          </button>
        </div>
      </div>
      
      {!isMinimized && (
        <div className="hub-content">
          <div className="circle-container">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="app-circle">
                <span style={{ color: 'white' }}>{num}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;