import React from 'react';

class ContentResult extends React.Component {

    render() {
        return (
        <div className = "search_app_content_result">
            { this.props.result.map((item) => {
                return (
                    
                    <div key={item.id} className = "search_app_content_result_items">
                        <div className = "search_app_content_result_items_left"></div>
                        <div className="search_app_content_result_items_right"></div>
                        <div onClick={ this.props.select } className = "search_app_content_result_items_center">{  item.name }</div>
                    </div>
                );
            }) }
        </div>
        );
    }
}

export default ContentResult;