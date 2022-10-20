import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Components/nav';
import Main from './Components/main';
import Card2 from './card2';

export default function App() {
    return (
        <div className='container-fluid '>
            <Nav />
            <Main />
            <Card2 />
        </div>
    )
}