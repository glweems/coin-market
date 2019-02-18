import React, { Component } from "react";

export class CoinTableHeader extends Component {
  render() {
    const headers = this.props.headers.map((header, index) => (
      <th key={index}>{header}</th>
    ));
    return (
      <thead>
        <tr>{headers}</tr>
      </thead>
    );
  }
}

export default CoinTableHeader;
