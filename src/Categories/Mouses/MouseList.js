import { Mouse } from "./Mouse";

export const MouseList = ({ items }) => {
    return (
        <>
            <div className="containerBooks">
                {items.map((item) => {
                    return <Mouse data={item} key={item.id} />;
                })}
            </div>
        </>
    );
};