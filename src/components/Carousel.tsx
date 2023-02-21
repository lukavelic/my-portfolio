import React from "react";

function Carousel({ scroll, images }: any) {
    // if scrolling to right, justify should be at end
    const justify = (dir: any) => (scroll === "left" ? "" : "justify-end");

    return (
        <div
            className={
                justify(scroll) +
                " " +
                "relative m-auto grid h-auto w-full place-items-center overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[15%] before:bg-gradient-to-l before:from-transparent before:to-zinc-900 after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[15%] after:bg-gradient-to-r after:from-transparent after:to-zinc-900 max-md:hidden"
            }
        >
            <div
                className={
                    scroll === "left"
                        ? "hover:paused flex w-[calc(250px*18)] animate-scrollLeft gap-6"
                        : "hover:paused flex w-[calc(250px*18)] animate-scrollRight gap-6"
                }
            >
                {images.map((img: any) => (
                    <div
                        id="slide"
                        className="flex h-[200px] w-[250px] items-center"
                    >
                        <img
                            src={img}
                            className="w-full rounded-lg transition-all hover:cursor-pointer"
                        ></img>
                    </div>
                ))}
                {images.map((img: any) => (
                    <div
                        id="slide"
                        className="flex h-[200px] w-[250px] items-center"
                    >
                        <img
                            src={img}
                            className="w-full rounded-lg transition-all hover:cursor-pointer"
                        ></img>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
