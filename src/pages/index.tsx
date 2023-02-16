import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage: any = () => {
    return (
        <Layout pageTitle="Home">
            <p>This is a test</p>
        </Layout>
    );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
