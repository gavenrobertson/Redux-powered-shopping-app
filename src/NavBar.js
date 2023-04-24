import React from 'react'
import './App.css'

function Navbar() {
    return (
    <div className='navContainer'>
        <nav className='navBar'>
            <a href='#' id='title'>Foody</a>
        </nav>
        <a href='#'> <button id="viewcartbtn">View Cart</button> </a>
    </div>        
    )
}

export default Navbar