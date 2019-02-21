import React from "react";
// import PropTypes from "prop-types";

function Hero(props) {
  return (
    <section className="hero is-link">
      <div className="hero-body">
        <h1 className="title">{props.title.toUpperCase()}</h1>
      </div>
    </section>
  );
}

// Hero.propTypes = {};

export default Hero;
