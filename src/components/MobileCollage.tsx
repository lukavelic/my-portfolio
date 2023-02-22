import React from "react";
import { Link } from "gatsby";

function MobileCollage({ className, images }: any) {
    const slicedImages = () => {
        return images.slice(0, 3);
    };
    return (
        <div className={className + " " + "flex gap-8 md:hidden"}>
            {slicedImages().map((obj: any) => {
                return (
                    <Link to={obj.url} className="w-full">
                        <img src={obj.img} className="w-full rounded-lg"></img>
                    </Link>
                );
            })}
        </div>
    );
}

export default MobileCollage;
