import React from 'react';
import {hot} from 'react-hot-loader/root';
import Header from "./Header";
import Navigation from "./Navigation";
import Main from "./Main";

import './App.scss';

function App() {
    return (
        <div className="app">
            <Header/>
            <Navigation/>
            <Main/>
        </div>
    );
}
export default hot(App);
