// src/services/api.js
const BASE = 'https://pokeapi.co/api/v2';

export async function fetchPokemons(limit = 20, offset = 0) {
  const res = await fetch(`${BASE}/pokemon?limit=${limit}&offset=${offset}`);
  const { results } = await res.json();

  return Promise.all(
    results.map(async p => {
      const data = await fetch(p.url).then(r => r.json());

      // Imagen estilo Pokémon GO
      const paddedId = String(data.id).padStart(3, '0');
      data.serebiiImage = `https://www.serebii.net/pokemongo/pokemon/${paddedId}.png`;

      // GIF animado de sprite (Game-Boy style)
      data.animatedSprite =
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/` +
        `sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`;

      // Iconos oficiales de tipo (SVG)
      const TYPE_ICONS = {
        grass:    'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/grass.svg',
        fire:     'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/fire.svg',
        water:    'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/water.svg',
        electric: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/electric.svg',
        bug:      'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/bug.svg',
        normal:   'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/normal.svg',
        poison:   'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/poison.svg',
        ground:   'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/ground.svg',
        fairy:    'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/fairy.svg',
        fighting: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/fighting.svg',
        psychic:  'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/psychic.svg',
        rock:     'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/rock.svg',
        ghost:    'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/ghost.svg',
        ice:      'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/ice.svg',
        dragon:   'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/dragon.svg',
        dark:     'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/dark.svg',
        steel:    'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/steel.svg',
        flying:   'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/flying.svg',
      };
      const primaryType = data.types[0].type.name;
      data.typeIcon = TYPE_ICONS[primaryType] || '';

      return data;
    })
  );
}
