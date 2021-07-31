import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { ItemCount } from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
export const ItemDetail = ({ data }) => {
    const { addToCart, inCart } = useContext(CartContext);
    const clickAdd = (qty) => addToCart(data, qty);

    return (
        <>
            {data ? (
                <div className="ItemDetail">
                    <img className="detailImg" src={data.img} alt="" />
                    <h1 className="productTitle">{data.titulo}</h1>
                    <p>$ {data.precio}</p>
                    <p>{data.descripcion}</p>
                    {data.stock > 0 && !inCart(data.id) ? (
                        <ItemCount stock={data.stock} clickAdd={clickAdd} />
                    ) : (
                        <Link to={"/cart"}>
                            <button className="finalizar">Finalizar Compra</button>
                        </Link>
                    )}
                </div>
            ) : (
                <h1>No hay coincidencias</h1>
            )}
        </>
    );
};
