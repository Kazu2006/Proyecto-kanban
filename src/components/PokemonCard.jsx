// src/components/PokemonCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function PokemonCard({ poke }) {
  const animatedSprite = poke.animatedSprite;    // GIF animado
  const serebiiArt     = poke.serebiiImage;      // arte estilo Go
  const mainType       = poke.types[0].type.name; // "fire", "water", etc.
  const typeIcon       = poke.typeIcon;          // URL al SVG del tipo

  return (
    <motion.div
      className={`card ${mainType}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Círculo de neón según tipo */}
      <div className="card-circle" />

      {/* Imagen estilo Pokémon GO */}
      <div className="card-art-wrapper">
        <img className="card-art" src={serebiiArt} alt={poke.name} />
      </div>

      {/* Número Pokédex */}
      <div className="card-number">
        #{String(poke.id).padStart(3, '0')}
      </div>

      {/* Nombre */}
      <h3 className="pokemon-name">{poke.name.toUpperCase()}</h3>

      {/* Tipo en píldora inferior izquierda con icono */}
      <span className={`pokemon-type-label ${mainType}`}>
        {typeIcon && (
          <img src={typeIcon} alt={mainType} className="type-icon" />
        )}
        {mainType.toUpperCase()}
      </span>

      {/* Sprite animado en esquina inferior derecha */}
      <img
        className="card-sprite"
        src={animatedSprite}
        alt={`${poke.name} sprite`}
        style={{ imageRendering: 'pixelated' }}
      />
    </motion.div>
  );
}
