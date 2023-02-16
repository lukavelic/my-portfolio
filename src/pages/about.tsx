import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

function AboutPage() {
    return (
        <div className="container">
            <p>About</p>
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default AboutPage;
