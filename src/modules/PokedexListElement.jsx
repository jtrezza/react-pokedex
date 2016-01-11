import React from 'react';
import { Link } from 'react-router';

const PokedexListElement = (props) => {
  return (
    <li className="pokemon-list__item">
      <div className="list-element-container pokemon-list__text">
        <Link className="pokemon-link" to={'/pokemon/'+props.data.number}><span className="pokemon-list__number">#{props.data.number}</span> {props.data.name}</Link>
      </div>
      <div className="list-element-container list-image-container">
        <Link to={'/pokemon/'+props.data.number}>
          <img src={props.base_media + props.data.number + '.png'} alt={props.data.name} className="pokemon-list__image" />
        </Link>
      </div>
    </li>
  );
}

export default PokedexListElement;