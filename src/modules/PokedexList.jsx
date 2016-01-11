import React from 'react';
import PokedexListElement from './PokedexListElement.jsx';
import $ from 'jquery';

class PokedexList extends React.Component{

  constructor(){
    super();
    this.state = {pokedex: [], pokedex_filter: []};
    this.filter = this.filter.bind(this);
    this.sort = this.sort.bind(this);
  }

  filter(e){
    let filtered = this.state.pokedex.filter(pokemon => pokemon.name.indexOf(e.target.value) > -1);
    this.setState({pokedex_filter: filtered});
  }

  sort(e){
    e.preventDefault();
    let method = e.target.attributes['data-method'].nodeValue;
    let ordered = [];
    if (method === 'number'){
      ordered = this.state.pokedex_filter.sort(this.compare);
    }else if (method === 'letter'){
      ordered = this.state.pokedex_filter.sort(this.compareLetter);
    }
    this.setState({pokedex_filter: ordered});
  }

  componentDidMount() {
    $.get(this.props.source, function(result) {
      var pokemon = result.objects[0].pokemon;
      pokemon = this.addNumbers(pokemon);
      pokemon.sort(this.compare);
      pokemon = pokemon.slice(0, 151);
      this.setState({
        pokedex: pokemon,
        pokedex_filter: pokemon
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

  compareLetter(a,b) {
    if (a.name < b.name)
      return -1;
    else if (a.name > b.name)
      return 1;
    else
      return 0;
  }

  render() {
    let listElements = this.state.pokedex_filter.map( pokemon => {
      return <PokedexListElement key={pokemon.number} base_media={this.props.base_media} data={pokemon} />
    });
    return (
      <div>
        <ul className="pokemon-list">
          {listElements}
        </ul>
        <section className="order-by-container">
          <hr className="hr" />
          <div className="order-by__items-container">
            <a href="" data-method="number" onClick={this.sort} className="order-by-anchor">ORDER BY NUMBER</a>
            <a href="" data-method="letter" onClick={this.sort} className="order-by-anchor">ORDER BY LETTER</a>
          </div>
          <div className="filter-container">
            <input type="text" className="input-filter" onKeyUp={this.filter} placeholder="FILTER BY NAME" />
          </div>
        </section>
      </div>
    );
  }
}

PokedexList.defaultProps = {
  source: "http://pokeapi.co/api/v1/pokedex/",
  base_media: "http://pokeapi.co/media/img/"
};

export default PokedexList;