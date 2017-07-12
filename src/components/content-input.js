import React from 'react';

class ContentInput extends React.Component {
    render() {
        //handle+Event
        return (
            <div className = "search_app_content_input">
                <input type="text" value = { this.props.query } onChange = { this.props.onChange } placeholder='Начинайте искать...' />
                <img src= { this.props.icon } onClick = {this.props.clear } className="clear_input" />
            </div>
        );
    }
}

export default ContentInput;