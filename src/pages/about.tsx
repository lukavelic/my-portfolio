import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { Link } from "gatsby";

function AboutPage() {
    return (
        <Layout pageTitle="About">
            <p>This is the about page</p>
        </Layout>
    );
}

export const Head = () => <Seo title="About" />;

export default AboutPage;
