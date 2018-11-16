import React, { Component } from 'react';
import Markdown from 'react-markdown';
import DataLoader from './DataLoader';
import NotFound from './NotFound';
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
        const content = this.getDocument(location.pathname);

        return content ? (
            <div className="c-document">
                <div className="u-width-container">
                    <div className="markdown-body">
                        <Markdown source={content} />
                    </div>
                </div>
            </div>
        ) : <NotFound />;
    }
}

export default ({...props}) => {
    return (
        <DataLoader json={DATA_URL}>
            <Document {...props} />
        </DataLoader>
    );
};


