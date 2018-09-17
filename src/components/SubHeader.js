import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import DataLoader from './DataLoader'
// import ResearchWork from './ResearchWork';

export default class SubHeader extends Component {
  render() {
    return (
      <div className="c-sub-header">
        <div className="u-width-container">
          <div className="c-sub-header__title">
            MARS Artificial Intelligence Research
          </div>
          <div className="c-sub-header__sub-title">
            MARS 인공지능 통합연구센터는 <br />
            현실 세계에 곧바로 적용 할 수 있는 인공지능 개발을 목표로 합니다.
          </div>
        </div>
      </div>
    );
  }
}

// export default (...props) => {
//   return (
//     // <DataLoader json={DATA_URL}>
//     <Home {...props} />
//     // </DataLoader>
//   );
// };
