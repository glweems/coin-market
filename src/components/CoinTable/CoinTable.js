import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';
import { CoinImg, apiFetch, coinListUrl } from '../../Api';

export class CoinTable extends Component {
  state = {};
  componentDidMount() {
    apiFetch(coinListUrl, data => {
      console.log(data.Data);
      this.setState({
        coins: [
          ...data.Data.map(coin => ({
            ...{ ...coin.CoinInfo },
            ...coin.DISPLAY.USD,
          })),
        ],
      });
    });
  }

  filtered() {
    console.log('filtered');
  }

  render() {
    const TableRows = () =>
      this.state.coins.map((coin, index) => (
        <TableRow key={coin.Name} coin={coin} rank={index + 1} />
      ));

    const Table = () => (
      <React.Fragment>
        <input
          onChange={this.filtered}
          type="text"
          className="input"
          placeholder="Search..."
        />
        <table className="table is-striped" style={tableStyle}>
          {TableHeader(TableHeaders)}
          <tbody>{TableRows()}</tbody>
        </table>
      </React.Fragment>
    );
    return (
      <section>{!this.state.coins ? <LoadingSpinner /> : Table()}</section>
    );
  }
}

const TableHeaders = ['Rank', 'Name', 'Market Cap', 'Price', 'Change'];

// * Table Header
const TableHeader = headers => {
  const marketCapStyle = header =>
    header === 'Market Cap' ? 'marketcap-row' : '';
  return (
    <thead>
      <tr>
        {headers.map(header => (
          <th className={marketCapStyle(header)} key={header}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

// * Table Row
const TableRow = props => {
  const changeStyle = () => ({
    color: props.coin.CHANGEPCTDAY >= 0 ? 'green' : 'red',
  });

  // Prop Types
  TableRow.propTypes = {
    coin: PropTypes.object,
    rank: PropTypes.string,
  };

  const imgStyle = {
    width: '25px',
    verticalAlign: 'middle',
    marginRight: '1rem',
  };

  const NameRow = () => (
    <Link to={props.coin.Name}>
      <img
        style={imgStyle}
        src={CoinImg(props.coin.IMAGEURL)}
        alt={`${props.coin.Name}`}
      />
      {props.coin.Name}
    </Link>
  );

  return (
    <tr>
      <td>{props.rank}</td>
      <td style={nameCell}>{NameRow()}</td>
      <td>{props.coin.MKTCAP}</td>
      <td>{props.coin.PRICE}</td>
      <td style={changeStyle()}>{`${props.coin.CHANGEPCTDAY}%`}</td>
    </tr>
  );
};

const nameCell = {
  fontWeight: '500',
};

const tableStyle = {
  width: '100%',
  overflow: 'scroll',
  margin: '0 auto',
};

export default CoinTable;
