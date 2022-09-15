import React, { Component } from 'react'

import './Side.css';

class Side extends Component<any> {
  render() {
    const { data } = this.props;

    return (
      <div className="aside">
        <h2>Expenses</h2>
        <p>Household Expenditures</p>
        <h2>Investment</h2>
        <p>Investment on Equity or Funds</p>
        <h2>Outstanding</h2>
        <p>Outstanding Payments</p>
      </div>
    )
  }
}

export default Side