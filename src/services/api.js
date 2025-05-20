const BASE = 'https://pokeapi.co/api/v2';

export async function fetchPokemons(limit = 20, offset = 0) {
  const res = await fetch(`${BASE}/pokemon?limit=${limit}&offset=${offset}`);
  const { results } = await res.json();
  return Promise.all(results.map(p => fetch(p.url).then(r => r.json())));
}
