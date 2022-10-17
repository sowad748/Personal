import React from 'react';
import Navbar from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

export default function App(){
    return(
        <div className='container mt-3'>
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}

