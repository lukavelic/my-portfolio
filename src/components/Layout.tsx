import * as React from "react";
import { useRef, useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";

interface IProps {
    pageTitle: string;
    children: React.ReactNode;
}

function Layout({ pageTitle, children }: IProps) {
    const [isNavHidden, setIsNavHidden] = useState(true);

    const data = useStaticQuery(graphql`
        query MyQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    const navLinks = useRef(null);

    const clickHandler = (e: React.MouseEvent) =>
        isNavHidden ? setIsNavHidden(false) : setIsNavHidden(true);

    return (
        <div className="h-screen bg-slate-700 font-roboto">
            <header
                className={
                    isNavHidden
                        ? "sticky top-0 z-10 flex h-12 w-screen flex-col bg-slate-100 opacity-80 transition-all"
                        : "sticky top-0 z-10 flex h-20 w-screen flex-col bg-slate-100 opacity-80 transition-all"
                }
            >
                <div className="flex items-center justify-between px-7 py-1 ">
                    <Link to="/" className="  text-3xl  text-blue-500">
                        {data.site.siteMetadata.title}
                    </Link>
                    <NavLinks className="flex list-none flex-row gap-2 max-md:hidden" />
                    <Hamburger
                        clickHandler={clickHandler}
                        className="md:hidden"
                    />
                </div>
                <div className=" m-auto my-0 h-px w-[calc(100vw-16px)] bg-slate-800"></div>
                <NavLinks
                    ref={navLinks}
                    className="flex list-none justify-between overflow-hidden px-8 pt-1"
                />
            </header>
            <main className="">{children}</main>
        </div>
    );
}

export default Layout;
