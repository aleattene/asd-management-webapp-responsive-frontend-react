import React from "react";
import {NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

const  NavDropdown = (props) => {

    return (
        <NavDropdown title={ props.title } id={ props.id } className="mx-auto">
            { items.map(item => {
                return (
                    <NavDropdown.Item as={Link} to={item.path}> {item.description} </NavDropdown.Item>
                )
            })}
        </NavDropdown>
    );
};

export default NavDropdown;