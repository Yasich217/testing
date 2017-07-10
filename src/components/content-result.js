import React from 'react';
import Database from '../constants/database';

class ContentResult extends React.Component {

    render() {
        return (
        <div id = "search_app_content_result">
            { Database.map(this.props.changeResult) }
        </div>
        );
    }
}

export default ContentResult;