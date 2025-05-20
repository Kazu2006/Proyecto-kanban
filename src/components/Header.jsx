// src/components/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <h1>PokéCatalog</h1>
      <input
        type="text"
        placeholder="Busca un Pokémon..."
        // onChange lo pasarás desde App o PokemonList
      />
    </header>
  );
}
