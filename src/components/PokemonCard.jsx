// src/components/PokemonCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function PokemonCard({ poke }) {
  const sprite     = poke.sprites.front_default;
  const serebiiArt = poke.serebiiImage; // Imagen estilo Pokémon GO
  const mainType   = poke.types[0].type.name;
  const colorVar   = `var(--bg-${mainType})`;

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Círculo coloreado por tipo */}
      <div 
        className="card-circle" 
        style={{ background: colorVar }} 
      />

      {/* Imagen estilo Pokémon GO centrada */}
      <div className="card-art-wrapper">
        <motion.img
          className="card-art"
          src={serebiiArt}
          alt={poke.name}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Número de Pokédex */}
      <div 
        className="card-number" 
        style={{ color: colorVar }}
      >
        #{String(poke.id).padStart(3, '0')}
      </div>

      {/* Nombre del Pokémon */}
      <h3 className="card-title">
        {poke.name.toLowerCase()}
      </h3>

      {/* Sprite pixelado (puedes quitarlo si no lo quieres) */}
      <img className="card-sprite" src={sprite} alt="" />
    </motion.div>
  );
}
