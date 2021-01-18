import React, { Component, useState } from 'react';
import ButtonBlock from '../button-block/button-block.component';
import './navbar.styles.scss';
import logo from '../../assets/logo-amv-small.svg';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeBackground);
  }

  changeBackground = () => {
    if (window.scrollY >= 80) {
      this.setState({
        navbar: true
      });
    } else {
      this.setState({
        navbar: false
      });
    }
  };

  render() {
    return (
      <div className={`navbar ${this.state.navbar ? 'active' : ''}`}>
        <img src={logo} />
        <a href="/">Contacts</a>
        <a href="/">Member</a>
        <a href="/">Robots</a>
        <a href="/">Achievements</a>
        <ButtonBlock>See More</ButtonBlock>
      </div>
    );
  }
}

export default Navbar;
