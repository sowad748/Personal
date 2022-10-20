import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Images/logo.jpg'

export default function Nav(){
    return (
    <div>
        <nav className='navbar  d-flex bg-light shadow'>
            <img src={Logo} alt='logo' width='70px'/>
        </nav>
    </div>
    )
}