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
    const projectsRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

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

    const contactClickHandler = (id: any) => {
        if (id === "projects") {
            if (projectsRef.current) {
                projectsRef.current.scrollIntoView({
                    behavior: "smooth",
                });
            }
        } else if (id === "about") {
            if (aboutRef.current) {
                aboutRef.current.scrollIntoView({
                    behavior: "smooth",
                });
            }
        } else {
            if (contactRef.current) {
                contactRef.current.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <Layout pageTitle="Home" refClickHandler={contactClickHandler}>
            <PopAnimation>
                <div className="flex gap-4 pb-8 text-white max-md:flex-col md:items-center md:justify-between">
                    <div className="flex flex-wrap gap-2">
                        <Button className="">
                            <svg
                                className="h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="#E34F26"
                                    d="M71 460 30 0h451l-41 460-185 52"
                                />
                                <path
                                    fill="#EF652A"
                                    d="m256 472 149-41 35-394H256"
                                />
                                <path
                                    fill="#EBEBEB"
                                    d="M256 208h-75l-5-58h80V94H114l1 15 14 156h127zm0 147h-1l-63-17-4-45h-56l7 89 116 32h1z"
                                />
                                <path
                                    fill="#FFF"
                                    d="M255 208v57h70l-7 73-63 17v59l116-32 1-10 13-149 2-15h-16zm0-114v56h137l1-12 3-29 1-15z"
                                />
                            </svg>
                            <span>HTML</span>
                        </Button>
                        <Button>
                            <svg
                                className="h-4 w-4"
                                viewBox="0 0 60 60"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="#264de4"
                                    d="m60.232 0-5.141 57.593L31.98 64 8.936 57.602 3.8 0z"
                                />
                                <path
                                    fill="#2965f1"
                                    d="m32.016 59.103 18.674-5.177L55.083 4.71H32.016z"
                                />
                                <path
                                    fill="#ebebeb"
                                    d="M32.016 26.074H15.573l.634 7.064h15.809zM32.016 11.775H14.302l.641 7.064h17.073zM16.522 36.67l.99 11.093 14.471 4.018.033-.01v-7.35l-.031.009-7.868-2.125-.503-5.634h-3.823z"
                                />
                                <path
                                    fill="#fff"
                                    d="m40.691 33.138-.82 9.163-7.88 2.126v7.35l14.484-4.014.106-1.193 1.66-18.6.172-1.896 1.276-14.3H31.992v7.065h9.954l-.642 7.235h-9.312v7.064z"
                                />
                            </svg>
                            <span>CSS</span>
                        </Button>
                        <Button>
                            <svg
                                className="h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 630 630"
                            >
                                <path fill="#f7df1e" d="M0 0h630v630H0z" />
                                <path d="M423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
                            </svg>
                            <span>JavaScript</span>
                        </Button>
                        <Button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-11.5 -10.232 23 20.463"
                                className="h-4 w-4"
                            >
                                <circle r="2.05" fill="#61dafb" />
                                <g fill="none" stroke="#61dafb">
                                    <ellipse rx="11" ry="4.2" />
                                    <ellipse
                                        rx="11"
                                        ry="4.2"
                                        transform="rotate(60)"
                                    />
                                    <ellipse
                                        rx="11"
                                        ry="4.2"
                                        transform="rotate(120)"
                                    />
                                </g>
                            </svg>
                            <span>React</span>
                        </Button>
                    </div>
                </div>
            </PopAnimation>
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
                        <span ref={projectsRef}>Projects</span>
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
                        <span ref={aboutRef}>About</span>
                    </Button>
                    <div></div>
                </PopAnimation>
            </Section>
            <Section>
                <PopAnimation>
                    <p className="text-5xl text-white">Let's get in touch!</p>
                    <div onClick={emailClickHandler} ref={contactRef}>
                        <Button className="relative mt-6 border-red-600 bg-red-600 transition-all hover:cursor-pointer hover:bg-transparent">
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
