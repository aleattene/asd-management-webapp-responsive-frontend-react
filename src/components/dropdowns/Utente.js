import {NavDropdown} from "react-bootstrap";
import React from "react";

const DropdownUser = () => {
    return (
        <NavDropdown title="Username" id="user-dropdown" align="end" className="mx-auto">
            <NavDropdown.Item href="#">Profilo</NavDropdown.Item>
            <NavDropdown.Item href="#">Impostazioni</NavDropdown.Item>
        </NavDropdown>
    );
};

export default DropdownUser;