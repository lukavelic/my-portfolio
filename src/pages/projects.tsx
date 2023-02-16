import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { Link } from "gatsby";

function ProjectsPage() {
    return (
        <Layout pageTitle="Projects">
            <p>This is the projects page</p>
        </Layout>
    );
}

export const Head = () => <Seo title="Projects" />;

export default ProjectsPage;
