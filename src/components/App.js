import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Document from './Document';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import LocationTracker from './LocationTracker';

export default class App extends Component {
  render() {
    return (
      <div className="c-app">
        <LocationTracker location={this.props.location} />
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="*">
            <Header isDocumentHeader />
          </Route>
        </Switch>
        <div className="c-app__body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={Document} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
