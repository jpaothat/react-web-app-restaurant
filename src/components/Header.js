import React from "react";
import { HStack, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Nav from './Nav';
import Sidebar from "./Sidebar";
import logo from "../images/logo.svg";

const Header = () => {
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

    return (
        <header className="header_wrapper">
            <HStack spacing={20}>
                <Sidebar />
                <Link to="/" className="nav-item">
                    <img src={logo} alt="Logo" />
                </Link>
                {isLargerThan1280 ? <Nav /> : null}
            </HStack>
        </header>
    );
}

export default Header;