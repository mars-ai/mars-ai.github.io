import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer className="c-footer">
        <div className="u-width-container">
          <div className="c-footer__body">
            <div className="c-footer__contact">
              <strong>이메일</strong> ses75@kaist.ac.kr<br />
              <strong>전화번호</strong> (+82)042 350 8485<br />
              34141 대전광역시 유성구 대학로 291 한국과학기술원 전산학부 E3-1 4401호<br />
              MARS 인공지능 통합 연구센터 신은순 앞<br />
            </div>
            <div className="c-footer__links">
              <a
                className="c-footer__link"
                href="https://github.com/mars-ai/mars-ai.github.io"
                target="_blank"
              >
                관리자
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
