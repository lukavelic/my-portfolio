import React from "react";

function MobileCollage({ className, images }: any) {
    const slicedImages = () => {
        return images.slice(0, 3);
    };
    return (
        <div className={className + " " + "md:hidden"}>
            {slicedImages().map((img: any) => {
                return <img src={img} className=" h-[180px] rounded-lg"></img>;
            })}
        </div>
    );
}

export default MobileCollage;
