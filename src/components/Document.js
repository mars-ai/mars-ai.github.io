import React, { Component } from 'react';
import Markdown from 'react-markdown';
import DataLoader from './DataLoader';
import config from '../../config.json';

const DATA_URL = `https://sheets.googleapis.com/v4/spreadsheets/1fNsyhX-Ra-L9AEQ8uqEkyyCzdf7Erm66TFiyqcGOJL0/values/Documents!A2:G?key=${config.googleApiKey}`;

class Document extends Component {
    getDocument(path) {
        const { data } = this.props;
        const rows = data.values.filter(row => row[0] === path);
        if (rows.length > 0) {
            return rows[0][1];
        } else {
            return null;
        }
    }

    render() {
        const { location } = this.props;
        return (
            <div className="c-document">
                <div className="c-document__header-background" />
                <div className="u-width-container">
                    <div className="markdown-body">
                        <Markdown source={this.getDocument(location.pathname)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ({...props}) => {
    return (
        <DataLoader json={DATA_URL}>
            <Document {...props} />
        </DataLoader>
    );
};


