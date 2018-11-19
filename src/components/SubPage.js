import React, { Component } from 'react';
import Markdown from 'react-markdown';
import DataLoader from './DataLoader';
import NotFound from './NotFound';
import config from '../../config.json';
import { Redirect } from 'react-router-dom';

const DATA_URL = `https://sheets.googleapis.com/v4/spreadsheets/1fNsyhX-Ra-L9AEQ8uqEkyyCzdf7Erm66TFiyqcGOJL0/values/Documents!A2:G?key=${config.googleApiKey}`;

class SubPage extends Component {

  getSubPage() {
    const { data } = this.props;
    const rows = data.values.filter(row => row[1] == "markdown");
    return rows.map(row => ({
      link: row[0],
      content: row[2],
    }));
  }

  renderSubPage(sub_page) {
    const safe_link = sub_page.link.replace("/", "");
    const title = sub_page.content.split("\n")[0].replace("#", "").trim();
    return (
      <div
        key={`${safe_link}-wraper`}
        className="c-sub-page__item">
        <a
          key={`${safe_link}`}
          href={sub_page.link}>
          {title}
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className="c-sub-page">
        <div className="u-width-container">
          <div className="u-section-title">
            Events
          </div>
          <div className="u-section-sub-title">
            MARS AI 센터에서 주최하는 행사 페이지입니다.
          </div>
          <div className="c-sub-page__items">
            {this.getSubPage().map(this.renderSubPage)}
          </div>
        </div>
      </div>
    );
  }
}

export default ({...props}) => {
  return (
    <DataLoader json={DATA_URL}>
      <SubPage {...props} />
    </DataLoader>
  );
};