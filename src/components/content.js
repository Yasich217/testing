import React from 'react';
import ContentInput from './content-input';
import ContentResult from './content-result';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.callBackThis = this;
        this.state = {
            keywords: '-'
        };
    }

    parseSearch() {
        console.log("Сюда пришли");
    }

    render() {
        return (
        <div id = "search_app_content">
            <ContentInput searchChange={ this.callBackThis } />
            <ContentResult text={ this.state.keywords } />
        </div>
        );
    }
}

export default Content;