import React from "react";

interface IProps {
    className?: string;
    children?: any;
}

function Button({ className, children }: IProps) {
    return (
        <div
            className={
                className +
                " " +
                "flex w-fit items-center gap-1 rounded-lg border px-2 py-1 text-white"
            }
        >
            {children}
        </div>
    );
}

export default Button;
