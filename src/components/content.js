import React from 'react';
import ContentInput from './content-input';
import ContentResult from './content-result';
import Axios from 'axios';
import { connect } from 'react-redux';
import Action from '../actions/search';
// import store from '../store';
// import PropTypes from 'prop-types';

class Content extends React.Component {

    handleChange = (event) => {
        let query = event.target.value;

        if(query !== '') {
            this.props.typingQuery(query);
            this.props.sendQuery(query);
        }

    }

    select = (event) => {
        let query = event.target.innerHTML;
        this.props.typingQuery(query);
        this.props.sendQuery(query);
    }

    render() {
        return (
        <div className = "search_app_content">
            <ContentInput icon = { this.props.search.icon } clear = { this.props.clearQuery } query = { this.props.search.query } onChange={ this.handleChange } />
            <ContentResult select={ this.select } result={ this.props.search.result } />
        </div>
        );
    }
}

//Redux


const mapStateToProps = function(state) {
    return {
        search: state.search
    }
}
const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        typingQuery: (query) => {
            const action = {
                type: 'TYPING_QUERY',
                payload: { query }
            };
            dispatch(action);
        },

        sendQuery: (query) => {
            const action = {
                type: 'LOAD_RESULT',
                payload: {
                    icon: './load.gif'
                }
            };
            dispatch(action);

            Axios.get('https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search?q=' + query)
            .then((response) => {
                const action = {
                    type: 'RESULT_LOADED',
                    payload: {
                        icon: './trash.png',
                        result: response.data
                    }
                };
                dispatch(action); 
            })
            .catch(function (error) {
                const action = {
                    type: 'LOADED_FAIL',
                    payload: {
                        icon: './trash.png',
                        error: error
                    }
                };
                dispatch(action); 
            });            
        },

        clearQuery: () => {
            const action = {
                type: 'CLEAR_QUERY',
                payload: { }
            };
            dispatch(action);        
        }
    };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);