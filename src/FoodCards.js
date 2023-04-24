import React from 'react'

import './App.css'

function GeneratingFoodCards() {
    const foodData = require('./data/products.json')
    console.log("== Here is the data within the products.json file: ", foodData)

    const val = 1

 

    return(
        <>
        
        
        {Object.keys(foodData).map(key => 
            <div className="foodCards" key={key}>
                <img src={foodData[key].photoUrl} width='600px' height='600px'></img>
                <h1>{foodData[key].name}</h1>
                <p>Price: ${foodData[key].price}</p>
                <p>Quantity: {foodData[key].inStock}</p>
                <button className="addToCartBtn">Add To Cart</button>
            </div>
        )}
        </>
    )
}

export default GeneratingFoodCards