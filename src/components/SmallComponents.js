import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const TableImg = styled.img`
  width: 20px;
`;

export class CoinTableImg extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired
  };
  render() {
    return <TableImg src={this.props.img} />;
  }
}

// ? Scroller
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

export const Scroller = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: scroll;
`;

export default { Scroller, ColoredPercent };
