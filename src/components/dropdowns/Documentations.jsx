import {NavDropdown} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

const DropdownDocs = () => {

    const titleDropdown = "Gestione Documentazione";
    const idDropdown = "docs-dropdown";
    const documentazioneItems = [
        { description: "Registra Movimento Finanziario", path: "/staff/transactions" },
        { description: "Visualizza Movimenti Finanziari", path: "/staff/transactions" },
        { description: "Registra Iscrizione Atleta", path: "/staff/enrollments" },
        { description: "Visualizza Iscrizioni Atleti", path: "/staff/enrollments" },
        { description: "Registra Certificazione Sanitaria", path: "/staff/healtcerts" },
        { description: "Visualizza Certificazioni Sanitarie", path: "/staff/healtcerts" },
        { description: "Registra Compenso Collaboratore", path: "/staff/remunerations" },
        { description: "Visualizza Compensi Collaboratori", path: "/staff/remunerations" },
        { description: "Registra Fattura", path: "/staff/invoices" },
        { description: "Visualizza Fatture", path: "/staff/invoices" },
        { description: "Registra Acquisto", path: "/staff/purchases" },
        { description: "Visualizza Acquisti", path: "/staff/purchases" },
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
