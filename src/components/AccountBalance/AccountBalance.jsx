import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AccountBalance.css';

export class AccountBalance extends Component {
  render() {
    return (
      <section>
        $ {this.props.amount}
      </section>
    );
  }
}

export default AccountBalance;

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired
}