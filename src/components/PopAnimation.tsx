import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const PopAnimation = ({ children }: any) => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        threshold: 0.25,
    });

    return (
        <div className=" overflow-hidden" ref={ref}>
            <div
                className={
                    inView
                        ? "translate-y-0 opacity-100 transition-all duration-1000"
                        : " translate-y-full opacity-0"
                }
            >
                {children}
            </div>
        </div>
    );
};

export default PopAnimation;
