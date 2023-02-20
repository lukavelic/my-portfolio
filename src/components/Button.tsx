import React from "react";

interface IProps {
    className?: string;
    text?: string;
    children?: JSX.Element;
}

function Button({ className, text, children }: IProps) {
    return (
        <div
            className={
                className +
                " " +
                "flex w-fit items-center gap-1 rounded-lg border px-2 py-1 text-white"
            }
        >
            {children}
            <p>{text}</p>
        </div>
    );
}

export default Button;
