import * as React from "react";
import { Link } from "gatsby";

function NavLinks(props: any) {
    return (
        <nav className={props.className + " " + "font-semibold text-blue-500"}>
            <Link to="/">home</Link>
            <Link to="/projects">projects</Link>
            <Link to="/about">about</Link>
        </nav>
    );
}

export default NavLinks;
