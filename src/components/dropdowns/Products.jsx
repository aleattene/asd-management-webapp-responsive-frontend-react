import {NavDropdown} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

const DropdownServices = () => {
    const titleDropdown = "Gestione Prodotti";
    const idDropdown = "services-dropdown";
    const productsItems = [
        { description: "Inserisci Prodotto", path: "/staff/products" },
        { description: "Visualizza Prodotti", path: "/staff/products" },
    ]
    return (
        <NavDropdown title={ titleDropdown } id={ idDropdown } className="mx-auto">
            { productsItems.map(item => {
                return (
                    <NavDropdown.Item as={Link} to={item.path}> {item.description} </NavDropdown.Item>
                )
            })}
        </NavDropdown>
    );
};

export default DropdownServices;