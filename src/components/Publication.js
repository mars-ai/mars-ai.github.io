import React, { Component } from 'react'

const CONTENT = [
  {
    "booktitle": "To appear in Proceedings of the 2018 Conference on Empirical Methods in Natural Language Processing (EMNLP 2018)",
    "authors": "Yeon Seonwoo, Sungjoon Park, and Alice Oh",
    "title": "Hierarchical Dirichlet Gaussian Marked Hawkes Process for Narrative Reconstruction in Continuous Time Domain",
    "link": "/public/research/UIST2018/uist2018_park.pdf",
    "group": "U&I Lab.",
    "year": 2018,
    "ack": true,
  },
  {
    "booktitle": "To appear in Proceedings of the 2018 Conference on Empirical Methods in Natural Language Processing (EMNLP 2018)",
    "authors": "JinYeong Bak, and Alice Oh",
    "title": "Conversational Decision Making Model for Predicting King’s Decision in the Annals of the Joseon Dynasty",
    "link": "/public/research/UIST2018/uist2018_park.pdf",
    "group": "U&I Lab.",
    "year": 2018,
    "ack": true,
  },
  {
    "booktitle": "To appear in Proceedings of the 31th Annual ACM Symposium on User Interface Software & Technology (UIST 2018)",
    "authors": "Jungkook Park, Yeong Hoon Park, and Alice Oh",
    "title": "Non-Linear Editing of Text-Based Screencasts",
    "link": "/public/research/UIST2018/uist2018_park.pdf",
    "group": "U&I Lab.",
    "year": 2018,
    "ack": true,
  },
];

export default class Publication extends Component {
  renderPublication(publication) {
    return (
      <div
        key={publication.title}
        className="c-publication__item"
      >
        <a 
          className="c-publication__item-title"
          href={publication.link}
        >
          {`${publication.title} (${publication.group}, ${publication.year})`}
        </a>
        <div className="c-publication__item-authors">
          {publication.authors}
        </div>
        <div className="c-publication__item-booktitle">
          {publication.booktitle}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="c-publication">
        <div className="u-width-container">
          <div className="u-section-title">
            Publications
          </div>
          <div className="u-section-sub-title">
            MARS AI 센터에서는 다음과 같은 연구 결과가 출판되었습니다.
          </div>
          <div className="c-publication__items">
            {CONTENT.map(this.renderPublication)}
          </div>
        </div>
      </div>
    );
  }
}