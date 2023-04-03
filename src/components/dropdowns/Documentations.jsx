import {NavDropdown} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

const DropdownDocs = () => {

    const titleDropdown = "Gestione Documentazione";
    const idDropdown = "docs-dropdown";
    const documentazioneItems = [
        { description: "Registra Movimento Finanziario", path: "/staff/documentations/transactions" },
        { description: "Visualizza Movimenti Finanziari", path: "/staff/documentations/transactions" },
        { description: "Registra Iscrizione Atleta", path: "/staff/documentations/enrollments" },
        { description: "Visualizza Iscrizioni Atleti", path: "/staff/documentations/enrollments" },
        { description: "Registra Certificazione Sanitaria", path: "/staff/documentations/healtcerts" },
        { description: "Visualizza Certificazioni Sanitarie", path: "/staff/documentations/healtcerts" },
        { description: "Registra Compenso Collaboratore", path: "/staff/documentations/remunerations" },
        { description: "Visualizza Compensi Collaboratori", path: "/staff/documentations/remunerations" },
        { description: "Registra Fattura", path: "/staff/documentations/invoices" },
        { description: "Visualizza Fatture", path: "/staff/documentations/invoices" },
        { description: "Registra Acquisto", path: "/staff/documentations/purchases" },
        { description: "Visualizza Acquisti", path: "/staff/documentations/purchases" },
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
