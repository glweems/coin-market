import React, { Component } from "react";
export class CoinPage extends Component {
  componentWillMount() {
    this.setState({
      id: this.props.match.params.id
    });
  }

  render() {
    return <section className="container">{this.state.id}</section>;
  }
}

export default CoinPage;
