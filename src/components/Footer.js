import React from "react";
import { HStack, VStack, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import smalllogo from "../images/smalllogo.png";

const Footer = () => {
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

    return (
        <footer className="footer_wrapper">
            <VStack margin="auto" spacing={10}>
                <HStack spacing="20" alignItems="top">
                    {isLargerThan1280 ?
                        <VStack justifyContent="space-between" width={130}>
                            <img src={smalllogo} alt="Logo" width={75} />
                            <p>Copyright</p>
                        </VStack>
                    : null}
                    <VStack width={130}>
                    <h3>Navigation</h3>
                        <nav className="nav-list">
                            <VStack>
                                <Link to="/" className="nav-item">Home</Link>
                                <Link to="/about" className="nav-item">About</Link>
                                <Link to="/menu" className="nav-item">Menu</Link>
                                <Link to="/reservations" className="nav-item">Reservations</Link>
                                <Link to="/order" className="nav-item">Order Online</Link>
                                <Link to="/login" className="nav-item">Login</Link>
                            </VStack>
                        </nav>
                    </VStack>
                    <VStack width={130}>
                        <h3>Contact</h3>
                        <p>(123)-456-7890</p>
                        <p>1234 West Main Street</p>
                        <p>Chicago, IL 60611</p>
                    </VStack>
                    {isLargerThan1280 ?
                        <VStack width={130}>
                            <h3>Social Media</h3>
                            <a href="https://twitter.com" className="nav-item">Twitter</a>
                            <a href="https://instagram.com" className="nav-item">Instagram</a>
                            <a href="https://facebook.com" className="nav-item">Facebook</a>
                        </VStack>
                    : null}
                </HStack>
                {isLargerThan1280 ? null :
                    <HStack spacing="20" alignItems="top">
                        <VStack justifyContent="space-between" width={130}>
                            <img src={smalllogo} alt="Logo" width={75} />
                            <p>Copyright</p>
                        </VStack>
                        <VStack width={130}>
                            <h3>Social Media</h3>
                            <a href="https://twitter.com" className="nav-item">Twitter</a>
                            <a href="https://instagram.com" className="nav-item">Instagram</a>
                            <a href="https://facebook.com" className="nav-item">Facebook</a>
                        </VStack>
                    </HStack>
                }
            </VStack>
        </footer>
    );
}

export default Footer;