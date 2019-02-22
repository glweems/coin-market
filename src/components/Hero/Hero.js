import React from "react";

const Hero = props => (
  <section className="hero is-link">
    <div className="hero-body">
      <h1 className="title">{props.title.toUpperCase()}</h1>
    </div>
  </section>
);

export default Hero;
