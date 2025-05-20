// src/components/PokemonCard.jsx
import { motion } from 'framer-motion';

export default function PokemonCard({ poke }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img src={poke.sprites.front_default} alt={poke.name} />
      <h3>{poke.name}</h3>
      <p>Tipo: {poke.types.map(t => t.type.name).join(', ')}</p>
    </motion.div>
  );
}
