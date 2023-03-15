import {NavDropdown} from "react-bootstrap";
import React from "react";

const DropdownBandi = () => {
    return (
        <NavDropdown title="Gestione Bandi" id="bandi-dropdown">
            <NavDropdown.Item href="#">Legge 17/1999 art. 22</NavDropdown.Item>
        </NavDropdown>
    );
};

export default DropdownBandi;