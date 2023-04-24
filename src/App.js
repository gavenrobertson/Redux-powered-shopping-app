import React from 'react'
import GeneratingFoodCards from './FoodCards.js'
import Navbar from './NavBar.js'
import './App.css'


function App() {
    
    return (
        <>
        <Navbar/>
        <div className="containerForFoodCards"> <GeneratingFoodCards/> </div>
        
        </>
    )
}

export default App;
