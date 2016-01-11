import React from 'react';

const PokedexListElement = (props) => {
  var number = props.data.resource_uri.substring(15, props.data.resource_uri.length - 1);
  return (
    <li className="pokemon-list__item">
      <div className="list-element-container pokemon-list__text">
        <span className="pokemon-list__number">#{number}</span> {props.data.name}
      </div>
      <div className="list-element-container list-image-container">
        <img src={props.base_media + number + '.png'} alt={props.data.name} className="pokemon-list__image" />
      </div>
    </li>
  );
}

export default PokedexListElement;