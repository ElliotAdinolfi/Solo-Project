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
                <td>{book.pages_read}</td>
                <td>{book.total_pages}</td>
                <td>{book.rating}</td>
            </tr>
        );
    })

    console.log('List of Books: ', list);

    return (
        <table>
            <tbody>
                <tr>
                    <th className="headerRow">Title</th>
                    <th className="headerRow">Series</th>
                    <th className="headerRow">Author</th>
                    <th className="headerRow">Pages Read</th>
                    <th className="headerRow">Total Pages</th>
                    <th className="headerRow">Rating</th>
                </tr>
                {list}
            </tbody>
        </table>
    );
};

export default booklist;
