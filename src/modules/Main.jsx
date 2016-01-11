import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {


  render() {
    return <div>
      <header className="main-header">
        <h1 className="main-title"><Link to="/" className="pokemon-link__white">POKÉDEX</Link></h1>
      </header>
      <section className="main-container">
        <section className="list-container" id="js-list-container">
          {this.props.children}
        </section>
      </section>
    </div>;
  }
}