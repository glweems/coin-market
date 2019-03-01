import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

export class CoinChart extends Component {
  COIN_ID = this.props.COIN_ID;

  // * Get Coin Chart Data
  async getChartData() {
    const res = await axios(
      `https://min-api.cryptocompare.com/data/histoday?fsym=${
        this.COIN_ID
      }&tsym=USD&limit=10`
    );
    return await res.data.Data;
  }

  componentDidMount() {
    if (!this.state) {
      (async () => {
        try {
          this.setState({
            data: await this.getChartData(),
          });
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }

  render() {
    return (
      <React.Fragment>
        {!this.state ? (
          <em>Loading..</em>
        ) : (
          <section className="container">
            <Line
              data={{
                labels: this.state.data.map(data =>
                  new Date().getMinutes(data.time)
                ),
                datasets: [
                  {
                    label: this.props.COIN_ID,
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.state.data.map(data => data.high),
                  },
                ],
              }}
            />
          </section>
        )}
      </React.Fragment>
    );
  }
}

export default CoinChart;
