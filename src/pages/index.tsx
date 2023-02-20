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
                <Button text="Other" className="border-blue-600 bg-blue-600" />
                <p className="mt-6">Test</p>
            </Section>

            <Section>
                <Button text="Other" className="border-blue-600 bg-blue-600" />
                <p className="mt-6">Test</p>
            </Section>

            <Section>
                <Button text="Other" className="border-blue-600 bg-blue-600" />
                <p className="mt-6">Test</p>
            </Section>
        </Layout>
    );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
