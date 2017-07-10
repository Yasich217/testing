import React from 'react';
import ContentInput from './content-input';
import ContentResult from './content-result';
import Database from '../constants/database';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keywords: ''
        };

        this.desription = '';
    }

    changeInput = (text) => {
        //setTimeout(() => this.setState({keywords: text}), 500);
        this.setState({keywords: text});
    }

    changeResult = (item) => {
        if(item.desc.toLowerCase().indexOf(this.state.keywords.toLowerCase()) !== -1) {
            {this.desription =  item.desc }
            return (
                
                <div key={item.id} onClick={ this.clickItem } className = "search_app_content_result_items">
                    <div className = "search_app_content_result_items_left">{ item.id  }</div>
                    <div className="search_app_content_result_items_right"> { item.name }</div>
                    <div className = "search_app_content_result_items_center">{ item.desc }</div>
                </div>
            );
        }
    }

    clickItem = () => {
       this.setState({
           keywords: this.desription
       });
    }


    render() {
        return (
        <div id = "search_app_content">
            <ContentInput text = {this.state.keywords} changeInput={ this.changeInput } />
            { this.state.keywords.trim().length > 0 &&  <ContentResult changeResult={ this.changeResult } />}
        </div>
        );
    }
}

export default Content;