import React from 'react';
import ContentInput from './content-input';
import ContentResult from './content-result';
import Axios from 'axios';

class Content extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            result: [],
            icon: './trash.png'
        };
    }

    onChange = (event) => {
        let query = event.target.value;

        if(query != '') 
            this.send(query);
        else
            this.setState({result: []});

        this.setState({ query, icon: './load.gif' });
    }

    send = (query) => {
        Axios.get('https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search?q=' + query)
        .then((response) => {
            this.setState({result: response.data, icon: './trash.png'});    
        })
        .catch(function (error) {
            this.setState({result: response.data, icon: './load.gif'});
        });      
    }

    select = (event) => {
        let query = event.target.innerHTML;
        this.setState({ query, icon: './load.gif'}, () => this.send(query));
    }

    clear = (event) => {
        this.setState({ query: '', result: [] });
    }

    render() {
        return (
        <div className = "search_app_content">
            <ContentInput icon = { this.state.icon } clear = { this.clear } query = { this.state.query } onChange={ this.onChange } />
            <ContentResult select={ this.select } result={ this.state.result } />
        </div>
        );
    }
}

export default Content;