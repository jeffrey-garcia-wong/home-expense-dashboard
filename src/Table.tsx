import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Expenses</td>
            <td>Household Expenditures</td>
          </tr>
          <tr>
            <td>Investment</td>
            <td>Investment on Equity or Funds</td>
          </tr>
          <tr>
            <td>Outstanding</td>
            <td>Outstanding Payments</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table