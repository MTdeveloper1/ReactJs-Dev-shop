import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { FormCheckout } from "./FormCheckout"
import { CartContext } from "../context/CartContext";
import { db } from "../../firebase";

export const Checkout = () => {
    const { cart, totalValor, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(false);
    const [statePurchase, setStatePurchase] = useState(false);
    const [error, setError] = useState(false);
    console.log(cart.length)

    const createOrder = (data) => {
        const order = { buyer: data, items: cart, total: totalValor };
        const orders = db.collection("orders");
        orders
            .add(order)
            .then(({ id }) => {
                setOrderId(id);
                setStatePurchase(true);
            })
            .catch((err) => {
                setError(err);
            });
    };

    return statePurchase === true ? 
    (   
        <Redirect to={`/checkout/result/${orderId}`}/>   
    ) 
    : 
    (
        cart.length > 0 ? <FormCheckout createOrder={createOrder} /> : <Redirect to={`/`}/>    
    );
};