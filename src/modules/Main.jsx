import React from 'react';

export default class extends React.Component {


  render() {
    return <div>
      <header className="main-header">
        <h1 className="main-title">POKÉDEX</h1>
      </header>
      <div className="whitespace-border-bottom">
        <hr/>
      </div>
      <section className="main-container">
        <section className="list-container" id="js-list-container">
          {this.props.children}
        </section>

      </section>
    </div>;
  }
}