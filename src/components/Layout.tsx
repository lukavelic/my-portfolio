import * as React from "react";
import { Link } from "gatsby";

interface IProps {
    pageTitle: string;
    children: any;
}

function Layout({ pageTitle, children }: IProps) {
    return (
        <div className="container">
            <header>
                <h1>Luka Velic</h1>
                <nav>
                    <ul>
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
