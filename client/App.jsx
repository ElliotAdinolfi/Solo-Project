import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import AddBook from './components/Addbook.jsx';
import Booklist from './components/Booklist.jsx';

import './styles.css';

const App = props => {
    return (
        <div>
            <main>
                <Booklist />
                <AddBook />
            </main>
        </div>
    );
};

export default App;