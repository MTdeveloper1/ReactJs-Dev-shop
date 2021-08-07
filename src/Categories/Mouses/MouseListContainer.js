import React from "react";
import { db } from "../../firebase";
import { useState, useEffect } from "react";
import { MouseList } from "./MouseList"


export const MouseListContainer = ({ titleSeccion }) => {
    const [data, setData] = useState([]);
    const getItems = () => {
        const docs = [];
        db.collection("mouses").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setData(docs);
        });
    };
    useEffect(() => {
        getItems();
    });

    return (
        <>
            <h1>{titleSeccion}</h1>
            <MouseList items={data} />
        </>
    );
};