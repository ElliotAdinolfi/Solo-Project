import React, { Component, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import AddBook from './components/Addbook.jsx';
import Booklist from './components/Booklist.jsx';
import DeleteBook from './components/Deletebook.jsx';

import './styles.css';


function update () {
    const [ value, setValue ] = useState(0);
    () => setValue(value => value + 1);
}



const App = props => {

    return (
        <div>
            <main>
                <Booklist />
                <div id="inputs">
                    <AddBook />
                    <DeleteBook />
                </div>
            </main>
        </div>
    );
};

export default App;