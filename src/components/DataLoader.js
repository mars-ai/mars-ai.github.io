import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class DataLoader extends Component {
  state = {
    data: undefined,
    isSpinnerVisible: false,
  };

  componentDidMount() {
    setTimeout(() => this.setSpinnerVisible(), 500);
    fetch(this.props.json).then(response => {
    	return response.json();
    }).then(data => {
    	this.setState({ data });
    }).catch(err => {
      this.setState({ data: null });
      console.error('Failed to load data:', err);
    });
  }

  setSpinnerVisible() {
    this.setState({ isSpinnerVisible: true });
  }

  render() {
    const { data, isSpinnerVisible } = this.state;
    const { children } = this.props;
    const body = data ? React.cloneElement(this.props.children, { data }) : null;
    const spinner = isSpinnerVisible && (data === undefined) ? (
      <div className="c-data-loader__spinner">
        <span className="u-spinner">
          <i className="fa fa-circle-o-notch fa-spin" />
        </span>
      </div>
    ) : null;
    const error = data === null ? (
      <div className="c-data-loader__error">
        <div className="u-text">
          <span className="u-inline-icon">
            <i className="fa fa-exclamation-triangle" />
          </span>
          Failed to load the page content. Please refresh the page to try loading the content again.
        </div>
      </div>
    ) : null;
    return (
      <div className="c-data-loader">
        {body}
        {spinner}
        {error}
      </div>
    );
  }
}
