import React, { Component } from 'react'

const CONTENT = [
  {
    title: 'Massive',
    body: '대규모 사용자와 불균형 데이터에 적합한 알고리즘과 시스템을 갖춘 인공지능',
    color: '#82A95A',
  },
  {
    title: 'Automated',
    body: '모델 선택, 학습, 추론, 변경 그리고 적응까지 자동화가 가능한 인공지능',
    color: '#DB824B',
  },
  {
    title: 'Reliable',
    body: '데이터 수집, 학습 알고리즘, 시스템 내 사용에 걸친 전 단계가 신뢰할 수 있고 검증된 인공지능',
    color: '#84348B',
  },
  {
    title: 'Secure',
    body: '의도적인 공격에 대해 강건하고 학습 데이터 및 파라미터 유출 위험을 최소화한 인공지능',
    color: '#475467',
  },
];

export default class Intro extends Component {
  renderCard(card) {
    return (
      <div
        key={card.title}
        className="c-intro__card"
        style={{ backgroundColor: card.color }}
      >
        <div className="c-intro__card-title">
          {card.title}
        </div>
        <div className="c-intro__card-body">
          {card.body}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="c-intro">
        <div className="u-width-container">
          <div className="u-section-title">
            MARS
          </div>
          <div className="u-section-sub-title">
            대량의 데이터(M)를 기반으로 자동적(A)으로 학습하고, 신뢰성 있는(R) 결과물을 산출하며 안전하게(S) 사용할 수 있는 인공지능을 연구합니다.
          </div>
          <div className="c-intro__cards">
            {CONTENT.map(this.renderCard)}
          </div>
        </div>
      </div>
    );
  }
}