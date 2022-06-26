import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.75rem;
`;


export class CoinList extends Component {
  render() {
    return (
      <Table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Ticker</td>
              <td>Price</td>
              <td>Balance</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              this.props.coinData.map( ({name, ticker, price, balance}) => 
                <Coin key={ticker} 
                      handleRefresh={this.props.handleRefresh}
                      name={name} 
                      ticker={ticker} 
                      balance={balance}
                      price={price} />
              )
            }
          </tbody>
        </Table>
    )
  }
}

export default CoinList