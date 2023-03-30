import {NavDropdown} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

const DropdownDocs = () => {

    const titleDropdown = "Gestione Documentazione";
    const idDropdown = "docs-dropdown";
    const documentazioneItems = [
        { description: "Registra Movimento Finanziario", path: "/transactions" },
        { description: "Visualizza Movimenti Finanziari", path: "/transactions" },
        { description: "Registra Iscrizione Atleta", path: "/enrollments" },
        { description: "Visualizza Movimenti Finanziari", path: "/enrollments" },
        { description: "Registra Certificazione Sanitaria", path: "/healtcerts" },
        { description: "Visualizza Certificazioni Sanitarie", path: "/healtcerts" },
        { description: "Registra Compenso Collaboratore", path: "/remunerations" },
        { description: "Visualizza Compensi Collaboratori", path: "/remunerations" },
        { description: "Registra Fattura", path: "/invoices" },
        { description: "Visualizza Fatture", path: "/invoices" },
        { description: "Registra Acquisto", path: "/purchases" },
        { description: "Visualizza Acquisti", path: "/purchases" },
        { description: "Acquisti e Ricevute Fiscali", path: "tofix" }
    ];

    return (
        <NavDropdown title={ titleDropdown } id={ idDropdown } className="mx-auto">
            { documentazioneItems.map(item => {
                return (
                    <NavDropdown.Item as={Link} to={item.path}> {item.description} </NavDropdown.Item>
                )
            })}
        </NavDropdown>
    );
};

export default DropdownDocs;
