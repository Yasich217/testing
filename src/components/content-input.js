import React from 'react';

class ContentInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text ?  this.props.text : ''
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            text: newProps.text
        });
    }

    changeInput = (event) => {
        const text = event.target.value;
        this.setState({text}, () => this.props.changeInput(text));
    }

    clearInput = (event) => {
        this.setState({text: ''}, () => this.props.changeInput(''));
        event.target.focus();
    }

    render() {
        return (
            <div id = "search_app_content_input">
                <input type="text" value = { this.state.text } onChange={ this.changeInput } placeholder='Начинайте искать...' />
                <img src="./trash.png" onClick={this.clearInput } className="clear_input" />
            </div>
        );
    }
}

export default ContentInput;