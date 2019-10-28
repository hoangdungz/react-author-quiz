import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';

const authors = [
    {
        name: 'mark',
        imageUrl: 'images/authors/marktwain.jpg',
        imageSource: 'Google',
        books: [
            'The Adventures of Huckleberry Finn',
            'book 2',
            'book 3',
            'book 4'
        ]
    }
];

const state = {
    turnData: {
        author: authors[0],
        books: authors[0].books
    }
};

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
