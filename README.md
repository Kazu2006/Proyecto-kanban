# Practicando con React: Mi Primer Proyecto

Este proyecto es mi primera experiencia práctica con React. Se trata de un **Catálogo de Pokémon** interactivo que muestra sprites animados, ilustraciones estilo Pokémon GO y toda la información básica de cada criatura.

---

## 📘 Descripción

"PokéCatalog" es una aplicación web que consume la [PokeAPI](https://pokeapi.co/) para mostrar:

* **Imágenes estilo Pokémon GO** (arte de Serebii).
* **Sprites animados** "Game-Boy style" en bucle.
* **Información de tipo** con iconos oficiales SVG.
* **Diseño responsivo** y estilizado con efectos de neón.

El objetivo es afianzar conceptos de React como componentes, props, hooks, y consumo de APIs.

---

## 🚀 Comenzando

### Requisitos

* Node.js (>=14)
* npm o yarn

### Instalación

```bash
# Clona el repositorio
git clone <URL_DEL_REPO>
cd poke-catalog

# Instala dependencias
npm install
# o yarn
\# Inicia el servidor de desarrollo
npm run dev
```

Abre tu navegador en `http://localhost:5173` para ver la aplicación.

---

## ✨ Características

* **Fetch de datos** con `fetch` y `Promise.all`.
* **Hooks personalizados** para manejar el loading y data.
* **Framer Motion** para animaciones de entrada y hover.
* **Tailwind/flex/grid** (o CSS puro) para layout responsivo.
* **Persistencia ligera** (LocalStorage) si se desea extender.

---

## 🗂️ Estructura del proyecto

```
poke-catalog/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── PokemonList.jsx
│   │   ├── PokemonCard.jsx
│   │   ├── Footer.jsx
│   ├── services/
│   │   └── api.js
│   ├── hooks/
│   │   └── useFetch.js
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
├── package.json
├── README.md
├── index.html
├── .gitignore
├── eslint.config.js
├── package-lock.json
└── vite.config.js

```

---

## 🛠️ ¿Cómo funciona?

1. **Header**: muestra el título y sprites animados de ejemplo.
2. **PokemonList**: invoca `fetchPokemons` para obtener un listado.
3. **PokemonCard**: por cada criatura, renderiza:

   * Arte estilo Pokémon GO.
   * Número de Pokédex.
   * Nombre y tipo (con icono y píldora).
   * Sprite animado en la esquina inferior derecha.
4. **Footer**: créditos y enlaces.

---

## 💻 Tecnologías usadas

* React (v18+)
* Vite
* Framer Motion
* PokeAPI
* CSS3 con custom properties

---

## 🤝 Hecho Por

¡Fabricio Paolo 

