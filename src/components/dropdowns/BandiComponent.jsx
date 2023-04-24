import {NavDropdown} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

const DropdownBandi = () => {
    const titleDropdown = "Gestione Bandi";
    const idDropdown = "bandi-dropdown";

return (
        <NavDropdown title={ titleDropdown } id={ idDropdown } className="mx-auto">
            <NavDropdown.Item as={Link} to="tofix">Legge 17/1999 art. 22 </NavDropdown.Item>
        </NavDropdown>
    );
};

export default DropdownBandi;