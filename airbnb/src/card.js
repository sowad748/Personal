import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import star from './Components/Images/star.png'

export default function Card(air) {

    return (

        <div className='card rounded m-2 border border-dark' >
            <div >
                <img src={air.img} className='rounded' height='400px' width='400px' />
                <h5 className='text-center'>{air.Headin}</h5>
                <p className='text-center'> <img src={star} className='star-icon' /> {air.p} <img src={air.sad} className='sad'/> </p>
            </div>
        </div>
    )
}