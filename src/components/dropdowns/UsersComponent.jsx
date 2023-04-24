import {NavDropdown} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

const DropdownUser = () => {
    return (
        <NavDropdown title="Username" id="user-dropdown" align="end" className="mx-auto">
            <NavDropdown.Item as={Link} to="tofix">Profilo</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="tofix">Impostazioni</NavDropdown.Item>
        </NavDropdown>
    );
};

export default DropdownUser;