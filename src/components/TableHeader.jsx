import React, { Component } from "react";

export class TableHeader extends Component {
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

export default TableHeader;
