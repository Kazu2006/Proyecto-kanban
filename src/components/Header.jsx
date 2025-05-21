// src/components/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <h1>PokéCatalog</h1>
      <div className="header-sprites">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
          alt="Bulbasaur"
          className="sprite-icon"
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif"
          alt="Charmander"
          className="sprite-icon"
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
          alt="Pikachu"
          className="sprite-icon"
        />
      </div>
    </header>
  );
}
