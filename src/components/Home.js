import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import SubHeader from './SubHeader';
import Intro from './Intro';
// import DataLoader from './DataLoader'
// import ResearchWork from './ResearchWork';

class Home extends Component {

  render() {
    return (
      <div className="c-home">
        <SubHeader />
        <div className="c-home__section">
          <Intro />
        </div>
      </div>
    );
  }
}

export default (...props) => {
  return (
    // <DataLoader json={DATA_URL}>
      <Home {...props} />
    // </DataLoader>
  );
};
