import React from "react";
import "./ViewItemDetail.css";
import { ItemDetailContainer } from "../../components/ItemContainer/ItemDetailContainer/ItemDetailContainer";
export const ViewItemDetail = ({ match }) => {
    return (
        <div className="">
            <ItemDetailContainer match={match} />
        </div>
    );
};
