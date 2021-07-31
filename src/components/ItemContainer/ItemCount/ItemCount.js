import React, { useState } from "react";
import cartPlus from "../../../assets/cart-plus.svg";
import "./ItemCount.css";

export const ItemCount = ({ stock, clickAdd }) => {
    const [count, setCount] = useState(0);
    const countDown = () => {
        if (count > 0) setCount(count - 1);
    };
    const countUp = () => {
        if (count < stock) setCount(count + 1);
    };

    return (
        <>
            <div className="containerBotonCount">
                <button id="resta" className="btnCount" onClick={() => countDown()}>
                    {" "}
                    -{" "}
                </button>
                <p>{count}</p>
                <button id="suma" className="btnCount" onClick={() => countUp()}>
                    {" "}
                    +{" "}
                </button>
            </div>
            {stock > 0 && (
                <div className="containerBotonAddCart">
                    <button onClick={() => clickAdd(count)}>
                        <img className="addToCart" src={cartPlus} alt="" />
                    </button>
                </div>
            )}
        </>
    );
};
