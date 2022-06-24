import React from 'react'
import './App.css';
import logo from './logo.svg';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 30000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 9999.99
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 299.99
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.2
        },
        {
          name: 'Cardano',
          ticker: 'ADA',
          price: 0.49
        },
      ]
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="React Logo" className="App-logo" />
          <h1 className="App-title">Coin Exchange</h1>
        </header>
        <AccountBalance amount={this.state.balance} />
        <table className="coin-table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Ticker</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.coinData.map( ({name, ticker, price}) => 
                <Coin key={ticker} name={name} ticker={ticker} price={price} />
              )
            }
          </tbody>
        </table>
      </div>
    );
  }

}
export default App;
