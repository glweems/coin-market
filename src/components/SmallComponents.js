import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// ! HEADER
export const Header = props => {
  return (
    <section className="hero">
      <div className="hero-body">
        <h1 className="title">{props.title}</h1>
      </div>
    </section>
  );
};
// ? Header Prop Types
Header.propTypes = {
  title: PropTypes.string.isRequired
};

// ! Coin Table Img
const CoinTableImg = styled.img`
  width: 20px;
`;

export class TableImg extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired
  };
  render() {
    return <CoinTableImg src={this.props.img} />;
  }
}

// ! Colored Percent
export class ColoredPercent extends Component {
  static propTypes = {
    percent: PropTypes.number.isRequired
  };

  styleObj = {
    color: this.props.percent > 0 ? "green" : "red"
  };

  render() {
    const { percent } = this.props;

    return <span style={this.styleObj}>{`${percent} %`}</span>;
  }
}
// ! Scroller
export const Scroller = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: scroll;
`;

export default { Scroller, ColoredPercent, TableImg, Header };
