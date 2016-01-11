import React from 'react';
import ReactDOM from 'react-dom';
import PokedexList from './modules/PokedexList.jsx';
import { Router, Route, Link, browserHistory } from 'react-router';
import Routes from './config/routes.jsx';

ReactDOM.render(<Routes />,
  document.getElementById('js-app'));