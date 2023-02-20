import React from "react";
import Button from "./Button";

function Section({ children }: any) {
    return (
        <div>
            <div className="w-[100vw - 48px] mt-12 mb-6 h-px bg-white"></div>
            <div className="mt-6">{children}</div>
        </div>
    );
}

export default Section;
