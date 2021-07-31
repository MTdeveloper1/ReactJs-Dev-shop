import React from "react";
import "./CartWidget.css";
import { useContext } from "react";
import icon from "../../assets/icon-cart.svg";
import { CartContext } from "../context/CartContext";
const CartWidget = () => {
    const { cart } = useContext(CartContext);

    function calcTotal() {
        let totalItems = 0;
        for (const item of cart) {
            totalItems = totalItems + item.quantity;
        }
        return totalItems;
    }

    return (
        calcTotal() > 0 && (
            <div className="cardWidgetContainer">
                <img src={icon} className="carritoImg" alt="icono-carrito" />
                <p className="carritoNumber">{calcTotal()}</p>
            </div>
        )
    );
};

export default CartWidget;
