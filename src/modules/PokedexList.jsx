import React from 'react';
import PokedexListElement from './PokedexListElement.jsx';
import $ from 'jquery';

class PokedexList extends React.Component{

  constructor(){
    super();
    this.state = {pokedex: []};
  }

  componentDidMount() {
    $.get(this.props.source, function(result) {
      var pokemon = result.objects[0].pokemon;
      pokemon = this.addNumbers(pokemon);
      pokemon.sort(this.compare);
      pokemon = pokemon.slice(0, 151);
      this.setState({
        pokedex: pokemon
      });
    }.bind(this));
  }

  addNumbers(pokemonArray){
    return pokemonArray.map(pokemon => {
      var number = pokemon.resource_uri.substring(15, pokemon.resource_uri.length - 1);
      pokemon.number = parseInt(number);
      return pokemon;
    } );
  }

  compare(a,b) {
    if (a.number < b.number)
      return -1;
    else if (a.number > b.number)
      return 1;
    else
      return 0;
  }

  render() {
    let listElements = this.state.pokedex.map( pokemon => {
      return <PokedexListElement key={pokemon.number} base_media="http://pokeapi.co/media/img/" data={pokemon} />
    });
    return (
      <ul className="pokemon-list">
        {listElements}
      </ul>
    );
  }
}

export default PokedexList;