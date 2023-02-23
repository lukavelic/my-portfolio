import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const Section: any = ({ children }: any) => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
    });

    return (
        <div>
            <div
                ref={ref}
                className={
                    inView
                        ? "mt-12 mb-6 h-px w-full bg-gray-600 transition-all duration-1000"
                        : "mt-12 mb-6 h-px w-0 bg-gray-600 transition-all duration-1000"
                }
            ></div>
            <div className="mt-6">{children}</div>
        </div>
    );
};

export default Section;
