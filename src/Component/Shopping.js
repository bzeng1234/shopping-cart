import React from "react";
import Item from "./Item";
import items from '../Data/ItemList';

function Shopping() {
    return (
        <div className="shopping-body">
            <ul>
                {items.map(item => <Item key={item.id} name={item.name} image={item.img} price={item.price} quantity={item.quantity}/>)}
            </ul>
        </div>
    );
};

export default Shopping;