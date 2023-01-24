import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const Sidebar = () => {
    const [isMenuOpen, handleMenu] = useState(false);

    const handleCloseMenu = () => {
        handleMenu(false);
    };

    const handleStateChange = (state) => {
        handleMenu(state.isOpen);
    };

    return (
            <Menu
                className="nav-bar"
                isOpen={isMenuOpen}
                onStateChange={handleStateChange}
            >
                <Link onClick={() => handleCloseMenu()} to="/" className="nav-item">Home</Link>
                <Link onClick={() => handleCloseMenu()} to="/about" className="nav-item">About</Link>
                <Link onClick={() => handleCloseMenu()} to="/menu" className="nav-item">Menu</Link>
                <Link onClick={() => handleCloseMenu()} to="/reservations" className="nav-item">Reservations</Link>
                <Link onClick={() => handleCloseMenu()} to="/order" className="nav-item">Order Online</Link>
                <Link onClick={() => handleCloseMenu()} to="/login" className="nav-item">Login</Link>
            </Menu>
    );
}

export default Sidebar;