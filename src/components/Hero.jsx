import React, { Component } from "react";

export class Hero extends Component {
  render() {
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <h1 className="title">{this.props.title}</h1>
        </div>
      </section>
    );
  }
}

export default Hero;
