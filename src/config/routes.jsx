import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Main from '../modules/Main.jsx';
import PokedexList from '../modules/PokedexList.jsx';
import PokemonDetail from '../modules/PokemonDetail.jsx';

export default class extends React.Component {

  render(){
    return <Router>
      <Route path="/" component={Main}>
        <IndexRoute component={PokedexList} />
        <Route path="pokemon/:number" component={PokemonDetail} />
      </Route>
    </Router>;
  }
}