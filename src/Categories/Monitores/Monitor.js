import React from "react";
import { ItemCount } from "../../components/ItemContainer/ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";

export const Monitor = ({ data }) => {
    const { addToCart } = useContext(CartContext);
    const clickAdd = (qty) => addToCart(data, qty);
    return (
        <>
            <div className="producto">
                <Link to={`/detail/${data.id}`}>
                    <img id={data.id} src={data.img} alt="" />
                    <p>{data.titulo}</p>
                </Link>
                {data.stock > 0 && (
                    <ItemCount stock={data.stock} clickAdd={clickAdd} />
                )} 
            </div>
        </>
    );
};
