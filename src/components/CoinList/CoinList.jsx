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
              {this.props.showBalance ? <td>Balance</td> : null}
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              this.props.coinData.map( ({key, name, ticker, price, balance}) => 
                <Coin key={key} 
                      handleRefresh={this.props.handleRefresh}
                      name={name} 
                      ticker={ticker} 
                      balance={balance}
                      price={price} 
                      showBalance={this.props.showBalance}
                      />
              )
            }
          </tbody>
        </Table>
    )
  }
}

export default CoinList