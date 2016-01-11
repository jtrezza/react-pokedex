import React from 'react';
import ReactDOM from 'react-dom';
import PokedexList from './modules/PokedexList.jsx';

ReactDOM.render(<PokedexList source="http://pokeapi.co/api/v1/pokedex/" />,
  document.getElementById('js-list-container'));