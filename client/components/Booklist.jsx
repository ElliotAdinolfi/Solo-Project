import React, { Component } from 'react';
import { useEffect, useState } from 'react';
const fetch = require('node-fetch');
// const { json } = require('express');

// const db = require('../server/models/bookModels.js');

const booklist = props => {
    
    const [ results, setResults ] = useState([])

    useEffect(() => {
        fetch('/api/')
            .then(data => data.json())
            .then(data => {
                setResults(data)
            })
            .catch(err => console.log(err))
    }, []);

    // console.log(results); 
    const list = results.map((book) => {
        return (
            <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.series}</td>
                <td>{book.author}</td>
                <td>{book.rating}</td>
            </tr>
        );
    })
    console.log(list);

    return (
        <table>
            <tbody>
                <th>Title</th>
                <th>Series</th>
                <th>Author</th>
                <th>Rating</th>
                {list}
            </tbody>
        </table>
    );
};

export default booklist;