import React from "react";
import { db } from "../../firebase";
import { useState, useEffect } from "react";
import { MonitorList } from "./MonitorList"


export const MonitorListContainer = ({ titleSeccion }) => {
    const [data, setData] = useState([]);
    const getItems = () => {
        const docs = [];
        db.collection("monitores").onSnapshot((querySnapshot) => {
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
            <MonitorList items={data} />
        </>
    );
};