import React from 'react';
import $ from 'jquery';

class PokemonDetail extends React.Component {

  constructor(){
    super();
    this.state = {
      image_src: "http://pokeapi.co/media/img/130.png",
      pokemon: {},
      loaded: false
    };
  }

  componentDidMount(){
    $.get(this.props.base_api + this.props.params.number, function(result) {
      this.setState({
        pokemon: result,
        loaded: true
      });
    }.bind(this));
  }

  render(){

    let abilities = this.state.loaded ? this.state.pokemon.abilities.map(ability => ability.name ):undefined;
    if(this.state.loaded) {
      abilities = abilities.join(', ');
    }
    return <div className="pokemon-detail">
      <div className="pokemon-detail__header">
        <div className=""><img src={this.state.image_src} alt="" className="pokemon-detail__image"/></div>
        <div>
          <p>#{this.props.params.number}</p>
          <p>{this.state.pokemon.name}</p>
          <p>WATER FLYING</p>
        </div>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>HEIGHT</td>
              <td>{this.state.pokemon.height}0 cm</td>
            </tr>
            <tr>
              <td>WEIGHT</td>
              <td>{this.state.pokemon.weight} kg</td>
            </tr>
            <tr>
              <td>ABILITIES</td>
              <td><span className="abilities-text">{abilities}</span></td>
            </tr>
          </tbody>

        </table>
      </div>
      <hr />
      <p>Lorem ipsum dolor sit amet.</p>
      <hr/>
    </div>;
  }
}

PokemonDetail.defaultProps = {
  base_api: "http://pokeapi.co/api/v1/pokemon/"
};

//this.props.params.number
export default PokemonDetail;