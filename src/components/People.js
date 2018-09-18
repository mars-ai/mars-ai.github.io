import React, { Component } from 'react'
import DataLoader from './DataLoader';
import config from '../../config.json';

const DATA_URL = `https://sheets.googleapis.com/v4/spreadsheets/1fNsyhX-Ra-L9AEQ8uqEkyyCzdf7Erm66TFiyqcGOJL0/values/People!A2:G?key=${config.googleApiKey}`;

class People extends Component {
  getPeople() {
    const { data } = this.props;
    return data.values.map(row => ({
      image: row[0] || "/public/images/blank-profile.png",
      name: row[1],
      title: row[2],
      link: row[3],
      group: row[4],
    }))
  }

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
            {this.getPeople().map(this.renderCard)}
          </div>
        </div>
      </div>
    );
  }
}

export default (...props) => {
  return (
    <DataLoader json={DATA_URL}>
      <People {...props} />
    </DataLoader>
  );
};


