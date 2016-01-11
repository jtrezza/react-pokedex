import React from 'react';

class PokemonDetail extends React.Component {

  render(){
    return <div>{this.props.params.number}</div>
  }
}

export default PokemonDetail;