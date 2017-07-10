import React from 'react';

class ContentInput extends React.Component {


    constructor(props) {
        super(props);
        this.defaultText = 'Начинайте искать...';
        this.tips = this.defaultText;
        this.state = {
            text: this.defaultText
        }
    };

    inputChange(event) {
        this.text = event.target.value;
        this.props.searchChange.setState({keywords: this.text});
    }


    render() {
        return (
        <div id = "search_app_content_input">
            <input type="text" onChange={ this.inputChange.bind(this) } placeholder={ this.tips } />
        </div>
        );
    }
}

export default ContentInput;