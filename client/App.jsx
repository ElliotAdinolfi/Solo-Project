import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Addbook from './components/Addbook.jsx';
import Booklist from './components/Booklist.jsx';

import './styles.css';

const App = props => {
    return (
        <div>
            <main>
                <h1>Please work</h1>
                <Booklist />
                {/* <Addbook /> */}
            </main>
        </div>
    );
};

export default App;