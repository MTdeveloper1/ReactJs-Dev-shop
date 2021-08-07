import { Monitor } from "./Monitor";

export const MonitorList = ({ items }) => {
    return (
        <>
            <div className="containerBooks">
                {items.map((item) => {
                    return <Monitor data={item} key={item.id} />;
                })}
            </div>
        </>
    );
};