import {NavDropdown} from "react-bootstrap";
import React from "react";

const DropdownDocs = () => {
    return (
    <NavDropdown title="Gestione Documentazione" id="docs-dropdown" className="mx-auto">
        <NavDropdown.Item href="#">Registra Movimento Finanziario</NavDropdown.Item>
        <NavDropdown.Item href="#">Visualizza Movimenti Finanziari</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Registra Iscrizione Atleta</NavDropdown.Item>
        <NavDropdown.Item href="#">Visualizza Iscrizioni Atleti</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Registra Certficazione Sanitaria</NavDropdown.Item>
        <NavDropdown.Item href="#">Visualizza Certificazioni Sanitarie</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Registra Compensi Collaboratori</NavDropdown.Item>
        <NavDropdown.Item href="#">Visualizza Compensi Collaboratore</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Registra Fatture</NavDropdown.Item>
        <NavDropdown.Item href="#">Visualizza Fatture</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Registra Acquisti</NavDropdown.Item>
        <NavDropdown.Item href="#">Visualizza Acquisti</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Acquisti e Ricevute Fiscali</NavDropdown.Item>
    </NavDropdown>
    );
};

export default DropdownDocs;
