//Подключение Реакта
import React from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';

//Подключение Редакса
import { Provider } from 'react-redux';
import store from './store';
//require('es6-promise').polyfill();

//Подключение препроцессора
import './less/index';

//Подключение компонентов
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

class AppSearch extends React.Component {
    render() {
        return (
             <Provider store={store}>
                <div className = "search_app">
                    <Header />
                    <Content />
                    <Footer />
                </div>
             </Provider>
        );
    };
}

ReactDOM.render(
    <AppSearch />,
    document.getElementById('app')
);
