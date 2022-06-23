import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  background-color: black;
  font-size: 2rem;
  text-align: left;
  padding: 1.5rem 0 1.5rem 5rem;
`;

export class AccountBalance extends Component {
  render() {
    return (
      <Section>
        Balance: ${this.props.amount}
      </Section>
    );
  }
}

export default AccountBalance;

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired
}