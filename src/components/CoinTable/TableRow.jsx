import React, { Component } from "react";

export class TableRow extends Component {
  changeStyle = () => {
    return {
      color: this.props.coin.DISPLAY.USD.CHANGEPCTDAY >= 0 ? "green" : "red"
    };
  };
  render() {
    const { coin, rank } = this.props;
    const { Name } = coin.CoinInfo;
    const { MKTCAP, PRICE, CHANGEPCTDAY, IMAGEURL } = coin.DISPLAY.USD;
    const CoinImg = URL => `https://cryptocompare.com/${URL}`;
    const NameRow = () => (
      <span className="has-text-weight-semibold">
        <img style={imgStyle} src={CoinImg(IMAGEURL)} alt={`${Name}`} />
        {Name}
      </span>
    );
    return (
      <tr>
        <td>{rank}</td>
        <td>{NameRow()}</td>
        <td>{MKTCAP}</td>
        <td>{PRICE}</td>
        <td style={this.changeStyle()}>{`${CHANGEPCTDAY}%`}</td>
      </tr>
    );
  }
}

const imgStyle = {
  width: "25px",
  verticalAlign: "middle",
  marginRight: "1rem"
};

export default TableRow;
