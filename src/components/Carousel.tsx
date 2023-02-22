import React from "react";
import { Link } from "gatsby";

function Carousel({ scroll, images }: any) {
    // if scrolling to right, justify should be at end
    const justify = (dir: any) => (scroll === "left" ? "" : "justify-end");

    return (
        <div
            className={
                justify(scroll) +
                " " +
                " relative m-auto mt-8 grid h-auto w-full place-items-center overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[15%] before:bg-gradient-to-l before:from-transparent before:to-zinc-900 after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[15%] after:bg-gradient-to-r after:from-transparent after:to-zinc-900 max-md:hidden"
            }
        >
            <div
                className={
                    scroll === "left"
                        ? "hover:paused flex w-[calc(20rem*18)] animate-scrollLeft gap-6"
                        : "hover:paused flex w-[calc(20rem*18)] animate-scrollRight gap-6"
                }
            >
                {images.map((obj: any) => (
                    <div
                        id="slide"
                        className="relative flex w-80 items-center rounded-lg"
                    >
                        <Link
                            to={obj.url}
                            className="absolute flex h-full w-full items-center justify-center rounded-lg opacity-0 transition-all hover:cursor-pointer hover:bg-black/30 hover:opacity-100"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-white"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                    />
                                </svg>
                            </div>
                        </Link>
                        <img
                            src={obj.img}
                            className="rounded-lg transition-all "
                        />
                    </div>
                ))}
                {images.map((obj: any) => (
                    <div
                        id="slide"
                        className="relative flex w-80 items-center rounded-lg"
                    >
                        <Link
                            to={obj.url}
                            className="absolute flex h-full w-full items-center justify-center rounded-lg opacity-0 transition-all hover:cursor-pointer hover:bg-black/30 hover:opacity-100"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-white"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                    />
                                </svg>
                            </div>
                        </Link>
                        <img
                            src={obj.img}
                            className="rounded-lg transition-all "
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
