import React from 'react';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <PokemonList />
      <Footer />
    </div>
  );
}
