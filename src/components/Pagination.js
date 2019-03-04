import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonsWrapper = styled.div`
  float: right;
  padding: 0.5rem;
  button {
    margin-right: 0.5rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export class Pagination extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    next: PropTypes.func.isRequired,
    prev: PropTypes.func.isRequired,
    limit: PropTypes.number.isRequired
  };

  render() {
    const NextButton = () => (
      <button
        type="button"
        onClick={this.props.next}
        className="button is-outlined is-small"
      >
        {`Next ${this.props.limit} -->`}
      </button>
    );
    const PrevButton = () => (
      <button
        type="button"
        onClick={this.props.prev}
        className="button is-outlined is-small"
      >
        {`<-- Previous ${this.props.limit}`}
      </button>
    );
    return (
      <ButtonsWrapper>
        {this.props.page === 0 ? (
          <NextButton />
        ) : (
          <React.Fragment>
            <PrevButton />
            <NextButton />
          </React.Fragment>
        )}
      </ButtonsWrapper>
    );
  }
}

export default Pagination;
