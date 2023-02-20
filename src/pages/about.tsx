import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function AboutPage() {
    return (
        <Layout pageTitle="About">
            <p>This is the about page</p>
            <StaticImage
                alt="A ship"
                src="../images/venti-views-tm_pBZ5UHiU-unsplash.jpg"
            />
            <p>This is the about page</p>
        </Layout>
    );
}

export const Head = () => <Seo title="About" />;

export default AboutPage;
