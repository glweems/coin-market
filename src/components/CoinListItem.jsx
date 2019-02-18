import React, { Component } from "react";

export class CoinListItem extends Component {
  render() {
    return (
      <React.Fragment>
        <p>{this.props.coin.Name}</p>
        <p>{this.props.coin.FullName}</p>
      </React.Fragment>
    );
  }
}

export default CoinListItem;
