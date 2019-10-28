import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';

function Hero() {
    return (
        <div className="row">
            <div className="jumbotron col-10 offset-1">
                <h1>Author Quiz</h1>
            </div>
        </div>
    );
}

function Turn({ author, books }) {
    return (
        <div className="row turn" style={{ backgroundColor: 'white' }}>
            <div className="col-4 offset-1">
                <img
                    className="authorimage"
                    src={author.imageUrl}
                    alt="Author"
                />
            </div>
            <div className="col-6">
                {books.map(title => (
                    <Book title={title} key={title} />
                ))}
            </div>
        </div>
    );
}
function Book({ title }) {
    return (
        <div className="answer">
            <h4>{title}</h4>
        </div>
    );
}
function Continue() {
    return <div></div>;
}
function Footer() {
    return (
        <div className="row" id="footer">
            <div className="col-12">
                <p className="text-muted credit">This is a footer</p>
            </div>
        </div>
    );
}

function AuthorQuiz({ turnData }) {
    return (
        <div className="container-fluid">
            {console.log('turn data: ', turnData)}
            <Hero />
            <Turn {...turnData} />
            <Continue />
            <Footer />
        </div>
    );
}

export default AuthorQuiz;
