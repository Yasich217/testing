import React from 'react';
import Database from '../constants/database';

class ContentResult extends React.Component {

    checkingDatabase(item, index) {
        if(item.desc.indexOf(this.props.text) !== -1) {
            return (
                <div key={item.id} id = "search_app_content_result_items">
                    <div id = "search_app_content_result_items_left">{ item.id  }</div>
                    <div id="search_app_content_result_items_right"> { item.name }</div>
                    <div id = "search_app_content_result_items_center">{ item.desc }</div>
                </div>
            );
        }
    }

    render() {
        return (
        <div id = "search_app_content_result">
            { Database.map(this.checkingDatabase.bind(this)) }
        </div>
        );
    }
}

export default ContentResult;