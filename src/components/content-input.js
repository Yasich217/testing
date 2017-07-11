import React from 'react';

class ContentInput extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         query: this.props.query ?  this.props.query : ''
    //     }
    // }

    // componentWillReceiveProps(newProps) {
    //     const query = newProps.query;
    //     //this.setState({query}, () => this.props.onChange(query));
    // }

    // changeInput = (event) => {
    //     const query = event.target.value;
        
    //     this.setState({query}, () => this.props.onChange(query));
    // }


    render() {
        return (
            <div className = "search_app_content_input">
                <input type="text" value = { this.props.query } onChange = { this.props.onChange } placeholder='Начинайте искать...' />
                <img src= { this.props.icon } onClick = {this.props.clear } className="clear_input" />
            </div>
        );
    }
}

export default ContentInput;