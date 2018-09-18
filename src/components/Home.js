import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import SubHeader from './SubHeader';
import Intro from './Intro';
import Publication from './Publication';
import People from './People';
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
        <div className="c-home__section">
          <Publication />
        </div>
        <div className="c-home__section">
          <People />
        </div>
      </div>
    );
  }
}

// https://sheets.googleapis.com/v4/spreadsheets/1fNsyhX-Ra-L9AEQ8uqEkyyCzdf7Erm66TFiyqcGOJL0/values/Main!A1:G?key=AIzaSyB9V7PkWIqFbGxchz4m7tkKf7z5aieCoPM

export default (...props) => {
  return (
    // <DataLoader json={DATA_URL}>
      <Home {...props} />
    // </DataLoader>
  );
};
