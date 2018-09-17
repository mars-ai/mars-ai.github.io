import classnames from 'classnames';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const SCROLL_THRESHOLD = 60;

export default class Header extends Component {
  state = {
    isScrolled: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const { isScrolled } = this.state;
    const currIsScrolled = window.scrollY > SCROLL_THRESHOLD;

    if (isScrolled !== currIsScrolled) {
      this.setState({ isScrolled: currIsScrolled });
    }
  };

  scrollToTop = () => {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      300
    );
  };

  render() {
    const { isScrolled } = this.state;
    return (
      <header 
        className={classnames(
          'c-header',
          { 'c-header--scrolled': isScrolled }
        )}
      >
        <div className="c-header__content u-width-container">
          <div className="c-header__title">
            <div className="c-header__title-logo">
              <img src="/public/images/logo.png" />
            </div>
            <div className="c-header__title-text">
              MARS AI Research
            </div>
          </div>
          <div className="c-header__menu">
            <Link
              className="c-header__menu-item"
              to="/"
            >
              Home
            </Link> 
            <Link
              className="c-header__menu-item"
              to="/members"
            >
              Publication
            </Link>
            <Link
              className="c-header__menu-item"
              to="/research"
            >
              People
            </Link>
            <Link
              className="c-header__menu-item"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
