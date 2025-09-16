import React from 'react';
import PropTypes, { func, string } from 'prop-types';

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

Buscador.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
};

export default Buscador;
