// src/components/PokemonCard.jsx
import React from 'react';
import { motion } from 'framer-motion';


export default function PokemonCard({ poke }) {
  const sprite     = poke.sprites.front_default;
  const serebiiArt = poke.serebiiImage;
  const mainType   = poke.types[0].type.name; // "fire", "water", etc.

  return (
    <motion.div
      className={`card ${mainType}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="card-circle" />

      <div className="card-art-wrapper">
        <img className="card-art" src={serebiiArt} alt={poke.name} />
      </div>

      <div className="card-number">
        #{String(poke.id).padStart(3, '0')}
      </div>

      <h3 className="pokemon-name">{poke.name.toUpperCase()}</h3>

      {/* Label de tipo en la esquina inferior izquierda */}
      <span className={`pokemon-type-label ${mainType}`}>
        {mainType.toUpperCase()}
      </span>

      <img className="card-sprite" src={sprite} alt={poke.name} />
    </motion.div>
  );
}
