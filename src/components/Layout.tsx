import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

interface IProps {
    pageTitle: string;
    children: React.ReactNode;
}

function Layout({ pageTitle, children }: IProps) {
    const data = useStaticQuery(graphql`
        query MyQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div className="container">
            <header>
                <h1>{data.site.siteMetadata.title}</h1>
                <h2>{pageTitle}</h2>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;
