import * as React from "react";
import { useState, useRef } from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Section from "../components/Section";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import MobileCollage from "../components/MobileCollage";
import image1 from "../images/image1.jpg";
import image2 from "../images/image1.jpg";
import image3 from "../images/image1.jpg";
import image4 from "../images/image1.jpg";
import image5 from "../images/image1.jpg";
import image6 from "../images/image1.jpg";
import image7 from "../images/image1.jpg";
import image8 from "../images/image1.jpg";
import image9 from "../images/image1.jpg";

const IndexPage: any = () => {
    const [opacityEmail, setOpacityEmail] = useState("opacity-100");
    const [opacityClipboard, setOpacityClipboard] = useState("opacity-0");
    const emailRef = useRef<HTMLDivElement>(null);

    const images = [
        { id: 0, img: image1, url: "/about" },
        { id: 1, img: image2, url: "/" },
        { id: 2, img: image3, url: "/" },
        { id: 3, img: image4, url: "/" },
        { id: 4, img: image5, url: "/" },
        { id: 5, img: image6, url: "/" },
        { id: 6, img: image7, url: "/" },
        { id: 7, img: image8, url: "/" },
        { id: 8, img: image9, url: "/" },
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
            <p className="max-w-xl text-justify text-gray-400">
                A mariner turned front-end web developer. Whether it's designing
                an engaging user interface or optimizing website performance, I
                take pride in delivering high-quality work that meets the needs
                of both clients and end-users.
            </p>
            <Section>
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
            </Section>
            <Section>
                <Button className="border-teal-600 bg-teal-600">
                    <span>About</span>
                </Button>
                <p className="mt-6">Test</p>
            </Section>
            <Section>
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
                        <span className={opacityEmail + " " + "transition-all"}>
                            lukavelic@outlook.com
                        </span>
                    </Button>
                </div>
            </Section>
        </Layout>
    );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
