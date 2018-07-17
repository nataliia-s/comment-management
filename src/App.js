import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import './App.scss';
import Header from "./components/Header";
import Content from "./components/Content";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='container'>
                    <Header/>
                    <Content/>
                    <NotificationContainer/>
                </div>
            </Provider>
        );
    }
}

export default App;
