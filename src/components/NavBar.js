import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

class NavMenu extends React.Component
{

    render() {
        return (
            <Nav className="justify-content-center mt-3" style={{zIndex: 1}} activeKey="/home">
                <Nav.Item>
                    <Link style={{color: "black"}} className="nav-link" to="/Home">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link style={{color: "black"}} className="nav-link" to="/Projects">Projects</Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{color: "black"}} target="_blank" href="https://www.linkedin.com/in/julian-estes-411b711a8/">LinkedIn</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}
export default NavMenu;