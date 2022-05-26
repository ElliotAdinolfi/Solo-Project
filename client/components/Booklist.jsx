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

    let totalPages = 0;
    // console.log(results); 
    const list = results.map((book) => {
        const percent = ((book.pages_read/book.total_pages)*100).toFixed(2) + '%';
        totalPages += book.pages_read;
        return (
            <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.series}</td>
                <td>{book.author}</td>
                <td>{book.pages_read}</td>
                <td>{book.total_pages}</td>
                <td>{percent}</td>
                <td>{book.rating}</td>
            </tr>
        );
    })

    console.log('List of Books: ', list);
    const estimatedTime = (totalPages/60).toFixed(2);

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th className="headerRow">Title</th>
                        <th className="headerRow">Series</th>
                        <th className="headerRow">Author</th>
                        <th className="headerRow">Pages Read</th>
                        <th className="headerRow">Total Pages</th>
                        <th className="headerRow">Progress</th>
                        <th className="headerRow">Rating</th>
                    </tr>
                    {list}
                </tbody>
            </table>
            <h4 className="timeRead">You have read {totalPages} pages in total!</h4>
            <h4 className="timeRead">Estimated time spent reading {estimatedTime} hours</h4>
        </div>
    );
};

export default booklist;
