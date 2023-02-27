import * as React from "react";
import { useState, useRef } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Section from "../components/Section";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import MobileCollage from "../components/MobileCollage";
import PopAnimation from "../components/PopAnimation";
import img1 from "../images/img1.webp";
import img2 from "../images/img2.webp";
import img3 from "../images/img3.webp";
import img4 from "../images/img4.webp";

const IndexPage: any = () => {
    const [opacityEmail, setOpacityEmail] = useState("opacity-100");
    const [opacityClipboard, setOpacityClipboard] = useState("opacity-0");
    const emailRef = useRef<HTMLDivElement>(null);

    const images = [
        { id: 0, img: img1, url: "/", alt: "" },
        { id: 1, img: img2, url: "/", alt: "" },
        { id: 2, img: img3, url: "/", alt: "" },
        { id: 3, img: img4, url: "/", alt: "" },
    ];

    const emailClickHandler = () => {
        navigator.clipboard.writeText("lukavelic@outlook.com");
        setOpacityEmail("opacity-0");
        setOpacityClipboard("opacity-100");

        setTimeout(() => {
            setOpacityEmail("opacity-100");
            setOpacityClipboard("opacity-0");
        }, 2000);
    };

    const contactClickHandler = () => {
        if (emailRef.current) {
            emailRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
            });
        }
    };

    return (
        <Layout pageTitle="Home" contactClickHandler={contactClickHandler}>
            <PopAnimation>
                <p className="max-w-xl text-justify text-gray-400">
                    A mariner turned front-end web developer. Whether it's
                    designing an engaging user interface or optimizing website
                    performance, I take pride in delivering high-quality work
                    that meets the needs of both clients and end-users.
                </p>
            </PopAnimation>
            <Section>
                <PopAnimation>
                    <Button className="border-blue-600 bg-blue-600">
                        <span>Projects</span>
                    </Button>
                    <div className="flex w-full flex-col justify-center">
                        <MobileCollage
                            className="mt-6 flex flex-col gap-4"
                            images={images}
                        ></MobileCollage>
                        <Carousel scroll="left" images={images}></Carousel>
                        <Carousel scroll="right" images={images}></Carousel>
                    </div>
                </PopAnimation>
            </Section>
            <Section>
                <PopAnimation>
                    <Button className="border-teal-600 bg-teal-600">
                        <span>About</span>
                    </Button>
                    <div></div>
                </PopAnimation>
            </Section>
            <Section>
                <PopAnimation>
                    <p className="text-5xl text-white">Let's get in touch!</p>
                    <div onClick={emailClickHandler} ref={emailRef}>
                        <Button className="relative mt-6 border-red-600 bg-red-600 hover:cursor-pointer hover:bg-transparent">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                            <span
                                className={
                                    opacityClipboard +
                                    " " +
                                    "absolute left-9 transition-all"
                                }
                            >
                                Copied to Clipboard!
                            </span>
                            <span
                                className={
                                    opacityEmail + " " + "transition-all"
                                }
                            >
                                lukavelic@outlook.com
                            </span>
                        </Button>
                    </div>
                </PopAnimation>
            </Section>
        </Layout>
    );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
