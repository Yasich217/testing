import React from 'react';

class ContentResult extends React.Component {

    createItems = (item) => {
        return (
            
            <div key={item.id} className = "search_app_content_result_items">
                <div className = "search_app_content_result_items_left"></div>
                <div className="search_app_content_result_items_right"></div>
                <div onClick={ this.props.select } className = "search_app_content_result_items_center">{  item.screen_name }</div>
            </div>
        );
    }

    render() {
        return (
        <div className = "search_app_content_result">
            { this.props.result.map(this.createItems) }
        </div>
        );
    }
}

export default ContentResult;