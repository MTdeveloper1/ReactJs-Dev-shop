import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
    const { cart, clearCart, statePurchase } = useContext(CartContext);
    if (statePurchase) clearCart();
    if (!cart.length)
        return (
            <div>
                <h1 className="noItems">No hay items seleccionados</h1>
                <Link to="/">
                    <button className="irCompra">Ir a comprar</button>   
                </Link>
            </div>
        );
    else
        return (
            <div>
                <h1 className="carritoTitle">CARRITO</h1>
                {cart.map((item) => (
                    <div className="productsInCartContainer">
                        <div className="productInCart">
                            <h6 className="productTitleInCart">Producto: {item.titulo}</h6>
                            <p className="productPriceInCart"><b>Precio:</b> {item.precio}</p>
                            <p className="productQuantiyInCart"><b>Cantidad:</b> {item.quantity}</p>
<div className="lineBr"></div>
                        </div>
                    </div>
                ))}
                <button className="vaciar" onClick={clearCart}>Vaciar carrito</button>
                <Link to="/checkout">
                    <button className="siguiente">Siguiente</button>
                </Link>
            </div>
        );
};
