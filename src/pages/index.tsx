import * as React from "react";
import Layout from "../components/Layout";

const IndexPage: any = () => {
    return (
        <Layout pageTitle="Home">
            <p>This is a test</p>
        </Layout>
    );
};

export default IndexPage;

export const Head: any = () => <title>Home Page</title>;
