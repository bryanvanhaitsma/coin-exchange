import React from 'react'
import './App.css';
import logo from './logo.svg';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React Logo" className="App-logo" />
        <h1 className="App-title">Coin Exchange</h1>
      </header>
      <AccountBalance amount={10000} />
      <table className="coin-table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Ticker</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={9999.99} />
          <Coin name="Ethereum" ticker="ETH" price={299.99} />
          <Coin name="Tether" ticker="USDT"price={1.0} />
          <Coin name="Ripple" ticker="XRP" price={0.2} />
        </tbody>
      </table>
    </div>
  );
}

export default App;