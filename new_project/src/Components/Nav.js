import React from 'react';
import Images from './Images/React-icon.jpg';

export default function Navbar() {
    return (
        <div >
            <header className='d-flex align-items-center navbar nav container-fluid bg-secondary'>
                <nav className='d-flex align-items-center'>
                    <img className='m-3' src={Images} alt="logo-icon" width="100px" />

                    <h2 className='title'>React Tutorial</h2>
                </nav>
                <ul className='navbar-nav p-3'>
                    <div className='d-flex align-items-center'>
                        <li className='nav-item'> <a className='navbar-brand link-dark' href='#'>About</a> </li>
                        <li className='nav-item'> <a className='navbar-brand link-dark' href='#'>History</a> </li>
                    </div>
                </ul>

            </header>
        </div>
    )
}