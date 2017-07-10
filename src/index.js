import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
require('./less/index');

class App extends React.Component {

    constructor(props) {
        super(props);

        this.defaultText = 'Начните поиск...';
        this.text = this.defaultText;
        this.state = {
            text: this.defaultText
        }
    };

    //Стандартные значения, если они не переданны
    static defaultProps = {
        testText: 'Default text'
    };

    //Типы передаваемых значений
    static propTypes = {
        testText: PropTypes.string.isRequired
    };

    inputChange(event) {
        this.text = event.target.value;
        this.setState({text: this.text});
        console.log('Ищем это - ', this.text);
    }

    startInput() {
        if(this.text === this.defaultText) {
            this.text = '';
            this.setState({text: this.text});
        }
    }

    endInput(event) {
        if(event.target.value === '') {
            this.text = this.defaultText;
            this.setState({text: this.defaultText});
        }
    }

    //Рендер компонента
    render() {
        return (
            <div className="main">
                <h1>{this.props.testText}</h1>
                <input type="text" onBlur={this.endInput.bind(this)} onFocus={this.startInput.bind(this)} value={this.state.text} onChange={this.inputChange.bind(this)}/>
            </div>
        );
    }

}

/*
ReactDOM.render(
    <App testText='This is test text!' />,
    document.getElementById('app')
);
*/