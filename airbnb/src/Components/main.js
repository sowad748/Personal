import React from 'react';
import ReactDOM from 'react-dom';
import Image1 from './Images/1.jpg';

import Image2 from './Images/2.jpg';

import Image3 from './Images/3.jpg';

import Image4 from './Images/4.jpg';

export default function Main() {

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <img src={Image1} className='p-3' alt='airbnb' height='350px' width='290px' />
                <img src={Image2} className='p-3' alt='airbnb' height='350px' width='270px' />
                <img src={Image3} className='p-3' alt='airbnb' height='350px' width='270px' />
                <img src={Image4} className='p-3' alt='airbnb' height='350px' width='280px' />
            </div>
            <h3>Online Experiences</h3>
            <p> Join unique interactive activities led by one-of-a-kind-hosts-all without leaving home.</p>

        </div>
    )
}