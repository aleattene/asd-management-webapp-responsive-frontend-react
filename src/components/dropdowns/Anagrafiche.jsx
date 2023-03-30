import {NavDropdown} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

const DropdownAnagrafiche = () => {

    const titleDropdown = "Gestione Anagrafiche";
    const idDropdown = "anagrafiche-dropdown";
    const anagraficheItems = [
        { description: "Gestione Atleti", path: "/athletes" },
        { description: "Gestione Collaboratori", path: "/trainers" },
        { description: "Gestione Medici", path: "/doctors" },
        { description: "Gestione Società", path: "/companies" },
    ];

    return (
        <NavDropdown title={ titleDropdown } id={ idDropdown } className="mx-auto">
            { anagraficheItems.map(item => {
                return (
                    <NavDropdown.Item as={Link} to={item.path}> {item.description} </NavDropdown.Item>
                )
            })}
        </NavDropdown>
    );
};

export default DropdownAnagrafiche;