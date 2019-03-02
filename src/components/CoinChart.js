import React, { Component } from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import { apiFetch, coinChartUrl } from "../Api";
import LoadingSpinner from "./LoadingSpinner";

export class CoinChart extends Component {
  state = {
    COIN_ID: this.props.COIN_ID
  };

  componentDidMount() {
    apiFetch(coinChartUrl(this.state.COIN_ID, 10), data => {
      console.log(`coinChartUrl Fetch Successful`);
      this.setState({
        ChartData: {
          labels: data.Data.map(point => Date.now(point.time)),
          datasets: [
            {
              label: this.state.COIN_ID,
              fill: true,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [...data.Data.map(point => point.high)]
            }
          ]
        }
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.ChartData ? (
          <LoadingSpinner />
        ) : (
          <Line data={this.state.ChartData} />
        )}
      </React.Fragment>
    );
  }
}

// Prop Types
CoinChart.propTypes = {
  COIN_ID: PropTypes.string
};

export default CoinChart;
