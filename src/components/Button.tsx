import React from "react";

function Button(props: any) {
    return (
        <div
            className={
                props.className +
                " " +
                "w-fit rounded-lg border px-2 py-1 text-white"
            }
        >
            <p>{props.text}</p>
        </div>
    );
}

export default Button;
