import React from "react";

export function Hero(props) {
  return (
    <section className="hero is-link">
      <div className="hero-body">
        <h1 className="title">{props.title.toUpperCase()}</h1>
      </div>
    </section>
  );
}

export default Hero;
