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
      <section className="order-by-container">
        <div className="order-by__items-container">
          <a href="" className="order-by-anchor">NUMBER</a>
          <a href="" className="order-by-anchor">LETTER</a>
          <a href="" className="order-by-anchor">REGION</a>
          <a href="" className="order-by-anchor">TYPE</a>
        </div>
        <div className="filter-container">
          <input type="text" className="filter" />
        </div>
      </section>
    </div>;
  }
}