import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Button from "./Button";
import Section from "./Section";
import PopAnimation from "./PopAnimation";

interface IProps {
    pageTitle: string;
    refClickHandler: Function;
    children: React.ReactNode;
}

function Layout({ pageTitle, refClickHandler, children }: IProps) {
    const data = useStaticQuery(graphql`
        query MyQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    const getYear = () => {
        const newDate = new Date();
        return newDate.getFullYear();
    };

    const clickHandler = (e: any) => {
        refClickHandler(e.target.id);
    };

    return (
        <div className="h-auto min-h-screen select-none bg-zinc-900 px-8 pt-8 pb-6 font-roboto md:px-16">
            <header className="mb-6 flex items-center justify-between text-white">
                <div className="flex gap-4 max-md:flex-col md:items-center md:justify-between">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gray-600 ">
                        <svg
                            className=" m-0 h-14 w-14 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2122 3000"
                        >
                            <path d="M1072.5.7C1033.6 5 1002 14 970.7 29.6c-56.1 28-100.3 71.7-128.3 126.7-20.5 40.4-29.9 77.5-31.1 123.7-1 37.6 4.7 72.7 17.3 106.9 4.7 12.7 16.6 37.3 23.8 49.1 27.2 44.7 68.1 82.9 113 105.7 7.2 3.6 13.2 6.7 13.4 6.8.2.2-.1 11.9-.7 26.2-1.2 28.6-4.9 128.1-5.4 146.5-.2 6.5-.6 12-1 12.4-.6.7-214.7 2-445.5 2.7-70 .2-127.5.7-127.9 1-.3.4 2.1 4.8 5.4 9.9 3.3 5.1 12.7 19.9 20.8 32.8 8.1 12.9 21.6 34.3 30 47.5 16.6 26.2 60.7 96.1 68.9 109.2l5.1 8.2h5c2.8.1 14.7.3 26.5.6 24.9.5 186 3.7 313 6.1 48.1.9 87.6 1.8 87.8 1.9.2.2-.2 17.8-.7 39.1-.6 21.4-2 74.9-3.1 118.9-2.1 81.4-5.4 207.4-9 346-1.2 42.3-3 106.5-4.1 142.5-1.1 36-2.4 82.1-2.9 102.5-.6 20.3-1.7 54.3-2.5 75.5-.8 21.2-1.9 51.8-2.5 68-.6 16.2-1.5 35.4-2 42.6-.6 7.3-1.4 19.6-2 27.5-1.1 16.4-5.1 52.5-8.1 72.8-4.2 29.2-10 56.3-19 89.8-9.2 34.4-28.6 81.1-44.7 107.6-36.6 60.3-95.7 100-165.7 111.3-15.5 2.5-47.9 2.6-63 .1-37.8-6.3-61.2-15.9-101.4-41.6-91.7-58.5-168.8-142.6-214.5-233.8l-3.6-7.3h2.7c1.6 0 26.9.7 56.3 1.5 57.3 1.5 91 2.2 91 1.7 0-.1-4-5.3-8.9-11.5-34-43.1-74.7-103.9-105.8-158.2-57.4-100-97.7-198.7-117.9-288-1.3-6.1-2.7-12.1-3-13.3-.7-3.2-1.6-2.3-11.7 10.7-62.6 80.8-120.5 190.5-157.3 298.2C27.8 1942.9 8.5 2036.3 3 2120c-.6 9.6-1.5 21.3-2.1 26-1.3 12.4-1.2 17.3.5 16.7.7-.3 16.1-11 34.2-23.8 18.1-12.7 41.2-29 51.4-36.2 10.2-7.2 25.4-18 33.8-24 8.5-6 15.7-10.5 16.1-10.1.4.5 1.8 5.4 3 10.9 3.1 14.3 10.4 38.2 17.8 58.5 26.8 73.3 69.3 147.9 122.2 214.5 39.7 50 97 107.3 148.1 148 107 85.4 233.9 152.3 382 201.4 12 4 19 7 31 13.7 82.6 45.7 157.1 113.8 208.6 190.4 15.1 22.4 36.4 62.1 44.9 83.5 4.6 11.8 4.4 11.3 5.5 9.5.6-.9 1-493.3 1-1280.1V440.3l-9.2-.7c-30-2.2-55.1-10.8-79.3-26.9-12.2-8.2-32.1-28.2-40.3-40.7-11.7-17.7-18.8-35-23.4-56.5-3.2-15.7-3.3-41.1 0-57.2 8.1-40.1 29.3-72.8 62.8-96.8 10.4-7.5 31.4-17.7 44.1-21.4 11.4-3.4 29-6.1 38.8-6.1h6.5V0l-12.7.2c-7.1.1-14.1.3-15.8.5zM1246 155.9V274h31.8c67.1.1 111 4.1 147.7 13.5 32 8.2 51 18 68.1 35 30.9 30.8 48.5 82.8 53.3 157.5 3.3 49.9 5.1 147.4 5.1 273.5 0 142.7 3.2 215.1 13.1 297.5 9.5 79.3 25.6 146.7 47.3 197.5 40.7 95.2 125 178.1 239.7 235.5 8.7 4.4 15.9 8.3 15.9 8.6 0 .3-1.7 1.2-3.7 2.1-20.4 8.4-51.6 24.6-73.5 38-60.8 37.2-111.2 87-145.9 144.4-10 16.6-27.9 52.8-35.2 71.4-18.5 46.8-32.1 98.7-41.1 156-4 25.2-6.2 50-9.1 99-3.3 55.6-5.4 159.2-6.5 321-.5 70.4-1.4 135.2-2 144-5.4 84.2-18.6 139.8-41.3 173.5-23.6 34.9-73.4 56.5-149.3 64.4-19.4 2.1-56.1 3.5-88.6 3.6H1246v236.3l70.3-.6c73.7-.6 97-1.5 130.7-4.8 38.2-3.7 62.6-8.7 92.9-18.9 95.8-32.3 158.9-87.6 205-180 5.3-10.7 11.6-24.5 14-30.5 22.3-56.6 37.8-134.8 42.5-214.5 3.5-58 5.3-132.4 6.6-268 1.2-123.8 2.8-179.1 7.1-241 7.9-116.1 20.5-176 47.7-228.5 32.6-62.6 85.8-109 150.6-131.2 28.3-9.6 56.5-15.1 89.6-17.3 9.1-.6 17.1-1.3 17.8-1.5.9-.4 1.2-24.8 1.2-118 0-111.2-.1-117.5-1.7-117.5-1 0-8.3-.5-16.3-1-65.7-4.5-118.6-22.6-163-55.8-13.9-10.5-36.3-32.1-47.3-45.7-34.4-42.6-55.4-93.7-66.2-160.8-12.2-76.5-17.6-173.2-19.5-354.7-1.9-178.9-7.3-287.8-18.1-366-14.6-105.3-49.8-182.9-110.9-244-38.8-38.9-84.8-67.1-139.2-85.3-24.4-8.2-53.5-13.7-93.3-17.6-35.7-3.5-53.6-4.2-128.2-4.8l-72.3-.6v118.2z" />
                        </svg>
                    </div>
                    <p className=" text-5xl  font-medium">Luka Velic</p>
                </div>
                <nav className="flex justify-end gap-4 text-lg max-md:hidden">
                    <div id="projects" onClick={clickHandler}>
                        <Button
                            id="projects"
                            className="border-blue-600 bg-blue-600 transition-all hover:cursor-pointer hover:bg-transparent"
                        >
                            <span id="projects">Projects</span>
                        </Button>
                    </div>
                    <div id="about" onClick={clickHandler}>
                        <Button
                            id="about"
                            className="border-teal-600 bg-teal-600 transition-all hover:cursor-pointer hover:bg-transparent"
                        >
                            <span id="about">About</span>
                        </Button>
                    </div>
                    <div id="contact" onClick={clickHandler}>
                        <Button
                            id="contact"
                            className="border-red-600 bg-red-600 transition-all hover:cursor-pointer hover:bg-transparent"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                                id="contact"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                    id="contact"
                                />
                            </svg>
                            <span id="contact">Contact</span>
                        </Button>
                    </div>
                </nav>
            </header>
            <main className=" text-gray-400">{children}</main>
            <footer className="text-white">
                <Section>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex justify-center gap-4">
                            <a
                                href="https://www.linkedin.com/in/lukavelic/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 fill-white"
                                >
                                    <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/lukavelic"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 fill-white"
                                >
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                        <div className="text-gray-600">
                            <span>{`lukavelic - ${getYear()}`}</span>
                        </div>
                    </div>
                </Section>
            </footer>
        </div>
    );
}

export default Layout;
