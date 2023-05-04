import React, { useContext } from "react";
import { Order } from "./App";

function Cart() {
    let {orderTotal} = useContext(Order);

    return (
        <div className="cart">Order Total: {orderTotal}</div>
    );
};

export default Cart;