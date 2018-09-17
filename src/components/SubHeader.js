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
            MARS 인공지능 통합연구센터는 대량의 데이터(M)를 기반으로 자동적(A)으로 학습하고,<br />
            신뢰성 있는(R) 결과물을 산출하며 안전 하게(S) 사용할 수 있는 인공지능을 연구합니다.
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
