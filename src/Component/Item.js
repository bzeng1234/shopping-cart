import React, { useState, useContext } from "react";
import '../style/item.css'
import { Order } from "./App";

function Item({name, image, price, quantity}) {
    let [itemQuantity, setItemQuantity] = useState(0);

    let {addToTotal} = useContext(Order);
    function increment() {
        if(itemQuantity < quantity)
            setItemQuantity(itemQuantity + 1);
    };

    function decrement() {
        if(itemQuantity > 0)  
            setItemQuantity(itemQuantity - 1);
        else
            return;
    };

    return (
        <div className="item">
            <img className="item-img" src={image} alt="item" ></img>
            <p className="item-name">{name}</p>
            <div className="item-options">
                <div className="item-price">{price}</div>
                <button className="quantity-btn" onClick={increment}>+</button>
                <input type='number' id="quantity" name="quantity" value={itemQuantity}></input>
                <button className="quantity-btn" onClick={decrement}>-</button>
                <button className="add-cart" type="button" onClick={()=>{addToTotal(itemQuantity, price); 
                    setItemQuantity(0)}}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Item;