import React from 'react';
import $ from 'jquery';

class PokemonDetail extends React.Component {

  constructor(){
    super();
    this.state = {
      image_src: "",
      pokemon: {},
      loaded: false,
      description: ""
    };
  }

  componentWillMount(){
    this.setState({image_src: "http://pokeapi.co/media/img/"+this.props.params.number+".png"});
  }
  componentDidMount(){
    $.get(this.props.base_api + '/pokemon/' + this.props.params.number)
      .then(function(result) {
          return this.setState({
            pokemon: result,
            loaded: true
          });
        }.bind(this))
      .then(function(r){
        return $.get(this.props.api_domain + this.state.pokemon.descriptions[0].resource_uri);
      }.bind(this))
      .then(function(r){
        return this.setState({description: r.description});
      }.bind(this))
  }

  render(){

    let abilities = this.state.loaded ? this.state.pokemon.abilities.map(ability => ability.name ):undefined;
    let types = this.state.loaded ? this.state.pokemon.types.map((type, index) => <Type key={index} name={type.name} ></Type> ):undefined;
    if(this.state.loaded) {
      abilities = abilities.join(', ');
    }
    return <div className="pokemon-detail">
      <div className="pokemon-detail__header">
        <div className="detail-top first-half">
          <div className="pokemon-detail__image-container">
            <img src={this.state.image_src} alt="" className="pokemon-detail__image"/>
          </div>
        </div><div className="detail-top second-half">
          <p className="pokemon-list__number paragraph-info">#{this.props.params.number}</p>
          <p className="paragraph-info">{this.state.pokemon.name}</p>
          <p className="paragraph-info">{types}</p>
        </div>
      </div>
      <div>
        <table className="general-info">
          <tbody>
            <tr>
              <td className="table-title">HEIGHT</td>
              <td className="table-text">{this.state.pokemon.height}0 cm</td>
            </tr>
            <tr>
              <td className="table-title">WEIGHT</td>
              <td className="table-text">{this.state.pokemon.weight} kg</td>
            </tr>
            <tr className="table-title">
              <td>ABILITIES</td>
              <td className="table-text"><span className="abilities-text">{abilities}</span></td>
            </tr>
          </tbody>

        </table>
      </div>
      <hr className="hr"/>
        <p>{this.state.description}</p>
      <hr className="hr"/>
    </div>;
  }
}

const Type = (props) => <span className={'pokemon-type '+props.name}>{props.name}</span>;

PokemonDetail.defaultProps = {
  base_api: "http://pokeapi.co/api/v1",
  api_domain: "http://pokeapi.co"
};

export default PokemonDetail;