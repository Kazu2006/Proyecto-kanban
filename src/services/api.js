const BASE = 'https://pokeapi.co/api/v2';

export async function fetchPokemons(limit = 20, offset = 0) {
  const res = await fetch(`${BASE}/pokemon?limit=${limit}&offset=${offset}`);
  const { results } = await res.json();

  return Promise.all(
    results.map(async p => {
      const data = await fetch(p.url).then(r => r.json());
      
      // Añadir imagen estilo Pokémon GO
      const paddedId = String(data.id).padStart(3, '0');
      data.serebiiImage = `https://www.serebii.net/pokemongo/pokemon/${paddedId}.png`;

      return data;
    })
  );
}
