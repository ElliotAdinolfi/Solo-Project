import React, { Component } from 'react';
import { useEffect } from 'react';
// const { json } = require('express');

// const db = require('../server/models/bookModels.js');

const booklist = props => {

    const list = [];
    
    useEffect(() => {
        fetch('/api/')
            .then(data => console.log(data))
            
    });

    return (
        <table>
            <p>stuff</p>
        </table>
    );
};

export default booklist