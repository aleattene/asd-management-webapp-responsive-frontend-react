import {NavDropdown} from "react-bootstrap";
import React from "react";

const DropdownAnagrafiche = () => {
    return (
        <NavDropdown title="Gestione Anagrafiche" id="anagrafiche-dropdown" className="mx-auto">
            <NavDropdown.Item href="#">Gestione Atleti</NavDropdown.Item>
            <NavDropdown.Item href="#">Gestione Collaboratori</NavDropdown.Item>
            <NavDropdown.Item href="#">Gestione Medici</NavDropdown.Item>
            <NavDropdown.Item href="#">Gestione Società</NavDropdown.Item>
        </NavDropdown>
    );
};

export default DropdownAnagrafiche;