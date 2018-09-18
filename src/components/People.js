import React, { Component } from 'react'

const CONTENT = [
  {
    "image": "http://uilab.kr/public/images/members/aliceoh.jpg",
    "name": "오혜연",
    "title": "책임연구원",
    "link": "https://aliceoh9.github.io/",
    "group": "U&I Lab.",
  },
  {
    "image": "http://uilab.kr/public/images/members/aliceoh.jpg",
    "name": "오혜연2",
    "title": "책임연구원",
    "link": "https://aliceoh9.github.io/",
    "group": "U&I Lab.",
  },
  {
    "image": "http://uilab.kr/public/images/members/aliceoh.jpg",
    "name": "오혜연3",
    "title": "책임연구원",
    "link": "https://aliceoh9.github.io/",
    "group": "U&I Lab.",
  },
  {
    "image": "http://uilab.kr/public/images/members/aliceoh.jpg",
    "name": "오혜연4",
    "title": "책임연구원",
    "link": "https://aliceoh9.github.io/",
    "group": "U&I Lab.",
  },
  {
    "image": "http://uilab.kr/public/images/members/aliceoh.jpg",
    "name": "오혜연5",
    "title": "책임연구원",
    "link": "https://aliceoh9.github.io/",
    "group": "U&I Lab.",
  },
  {
    "image": "http://uilab.kr/public/images/members/aliceoh.jpg",
    "name": "오혜연6",
    "title": "책임연구원",
    "link": "https://aliceoh9.github.io/",
    "group": "U&I Lab.",
  },
  {
    "image": "http://uilab.kr/public/images/members/aliceoh.jpg",
    "name": "오혜연7",
    "title": "책임연구원",
    "link": "https://aliceoh9.github.io/",
    "group": "U&I Lab.",
  },
  {
    "image": "http://uilab.kr/public/images/members/aliceoh.jpg",
    "name": "오혜연8",
    "title": "책임연구원",
    "link": "https://aliceoh9.github.io/",
    "group": "U&I Lab.",
  },
  {
    "image": "http://uilab.kr/public/images/members/aliceoh.jpg",
    "name": "오혜연9",
    "title": "책임연구원",
    "link": "https://aliceoh9.github.io/",
    "group": "U&I Lab.",
  },
  {
    "image": "http://uilab.kr/public/images/members/aliceoh.jpg",
    "name": "오혜연10",
    "title": "책임연구원",
    "link": "https://aliceoh9.github.io/",
    "group": "U&I Lab.",
  },
];

export default class People extends Component {
  renderCard(card) {
    return (
      <a
        key={`${card.image}-${card.name}`}
        className="c-people__card"
        href={card.link}
      >
        <div
          className="c-people__card-image"
          style={{ backgroundImage: `url(${card.image})` }}
        />
        <div className="c-people__card-item c-people__card-name">
          {card.name}
        </div>
        <div className="c-people__card-item c-people__card-title">
          {card.title}
        </div>
        <div className="c-people__card-item c-people__card-group">
          {card.group}
        </div>
      </a>
    );
  }

  render() {
    return (
      <div className="c-people">
        <div className="u-width-container">
          <div className="u-section-title">
            People
          </div>
          <div className="u-section-sub-title">
            MARS AI 센터 소속 연구원은 다음과 같습니다.
          </div>
          <div className="c-people__cards">
            {CONTENT.map(this.renderCard)}
          </div>
        </div>
      </div>
    );
  }
}