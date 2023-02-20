import React from "react";

function Hamburger(props: any) {
    const clickHandler = (e: React.MouseEvent) => {
        props.clickHandler(e);
    };

    return (
        <div
            className={
                "space-y-2 p-1 transition-all active:scale-125" +
                " " +
                props.className
            }
            onClick={clickHandler}
        >
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-5 bg-gray-600"></span>
        </div>
    );
}

export default Hamburger;
