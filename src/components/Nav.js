import React from "react";
import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav-bar">
            <HStack spacing={10}>
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/menu" className="nav-item">Menu</Link>
                <Link to="/reservations" className="nav-item">Reservations</Link>
                <Link to="/order" className="nav-item">Order Online</Link>
                <Link to="/login" className="nav-item">Login</Link>
            </HStack>
        </nav>
    );
}

export default Nav;