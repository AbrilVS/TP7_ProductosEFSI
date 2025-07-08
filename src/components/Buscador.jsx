import React from 'react';

function Buscador({ value, onChange }) {
  return (
    <div className="buscador-container">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={value}
        onChange={e => onChange(e.target.value)}
        className="buscador-input"
      />
    </div>
  );
}

export default Buscador;