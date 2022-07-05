import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
  margin: 50px auto 50px auto;
  display: inline-block;
  font-size: 1.75rem;
`;

export default function CoinList(props) {
  return (
    <Table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Ticker</td>
            <td>Price</td>
            {props.showBalance ? <td>Balance</td> : null}
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            props.coinData.map( ({key, name, ticker, price, balance}) => 
              <Coin key={key} 
                    handleRefresh={props.handleRefresh}
                    name={name} 
                    ticker={ticker} 
                    balance={balance}
                    price={price} 
                    showBalance={props.showBalance}
                    tickerId={key}
                    />
            )
          }
        </tbody>
      </Table>
  );
}