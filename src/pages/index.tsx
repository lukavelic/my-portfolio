import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: any = () => {
    return (
        <Layout pageTitle="Home">
            <div></div>
        </Layout>
    );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
