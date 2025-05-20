// src/components/PokemonList.jsx
import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { fetchPokemons } from '../services/api';
import Loader from './Loader';
import PokemonCard from './PokemonCard';



export default function PokemonList() {
  const { data: pokes, loading, error } = useFetch(() => fetchPokemons(80), []);
  const [filter, setFilter] = useState('');

  if (loading) return <Loader />;
  if (error)   return <div className="error">Error cargando Pokémons.</div>;

  const filtered = pokes.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="pokemon-list">
      <input
        className="search-input"
        type="text"
        placeholder="Filtrar por nombre"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <div className="pokemon-grid">
        {filtered.map(p => (
          <PokemonCard key={p.id} poke={p} />
        ))}
      </div>
    </section>
  );
}
