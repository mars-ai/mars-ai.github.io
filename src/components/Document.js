import React, { Component } from 'react';
import Markdown from 'react-markdown';
import DataLoader from './DataLoader';
import NotFound from './NotFound';
import config from '../../config.json';
import { Redirect } from 'react-router-dom';

const DATA_URL = `https://sheets.googleapis.com/v4/spreadsheets/1fNsyhX-Ra-L9AEQ8uqEkyyCzdf7Erm66TFiyqcGOJL0/values/Documents!A2:G?key=${config.googleApiKey}`;

class Document extends Component {
    getDocument(path) {
        const { data } = this.props;
        const rows = data.values.filter(row => row[0] === path);
        let docInfos = {};
        if (rows.length > 0) {
            docInfos.type = rows[0][1];
            docInfos.document = rows[0][2];
            return docInfos;
        } else {
            return null;
        }
    }

    render() {
        const { location } = this.props;
        const docInfos = this.getDocument(location.pathname);
        if (!docInfos) {
            return <NotFound />
        } else if (docInfos.type == "redirect") {
            return <Redirect to={docInfos.document} />
        } else if (docInfos.type == "markdown") {
            return (
                <div className="c-document">
                    <div className="u-width-container">
                        <div className="markdown-body">
                            <Markdown source={docInfos.document} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return <NotFound />
        }
    }
}

export default ({...props}) => {
    return (
        <DataLoader json={DATA_URL}>
            <Document {...props} />
        </DataLoader>
    );
};


