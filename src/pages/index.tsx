import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Section from "../components/Section";
import Button from "../components/Button";

const IndexPage: any = () => {
    return (
        <Layout pageTitle="Home">
            <p className="max-w-xl text-justify">
                A mariner turned front-end web developer. Whether it's designing
                an engaging user interface or optimizing website performance, I
                take pride in delivering high-quality work that meets the needs
                of both clients and end-users.
            </p>
            <Section>
                <Button
                    text="Projects"
                    className="border-blue-600 bg-blue-600"
                />
                <p className="mt-6">Test</p>
            </Section>
            <Section>
                <Button text="About" className="border-teal-600 bg-teal-600" />
                <p className="mt-6">Test</p>
            </Section>
            <Section>
                <p className="mt-6 text-5xl text-white">Let's get in touch!</p>
                <Button
                    text="lukavelic@outlook.com"
                    className="mt-6 border-red-600 bg-red-600 hover:bg-transparent"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </Button>
            </Section>
        </Layout>
    );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
