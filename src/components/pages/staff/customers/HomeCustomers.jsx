import React from 'react';
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import CardConstructor from "../../../layout/Card";

const cardProperties = [
    {
        title: "Gestione Atleti",
        description: "In questa sezione è possibile gestire gli atleti tesserati per la A.S.D.",
        button: "Seleziona",
        src: process.env.PUBLIC_URL + "/img/staff/customers/atleta_1920_1280.jpg",
        alt: "Atleti",
        linkTo: "/staff/customers/athletes"
    },
    {
        title: "Gestione Collaboratori",
        description: "In questa sezione è possibile gestire i collaboratori della A.S.D.",
        button: "Seleziona",
        src: process.env.PUBLIC_URL + "/img/staff/customers/collaboratore_1920_1280.jpg",
        alt: "Collaboratori",
        linkTo: "/staff/customers/trainers",
    },
    {
        title: "Gestione Medici",
        description: "In questa sezione è possibile gestire le schede anagrafiche dei medici che rilasciano" +
            "l'idoneità sportiva agli atleti della A.S.D.",
        button: "Seleziona",
        src: process.env.PUBLIC_URL + "/img/staff/customers/medico_1920_1280.jpg",
        alt: "Medici",
        linkTo: "/staff/customers/doctors",
    },
    {
        title: "Gestione Società",
        description: "In questa sezione sono consultabili le informazioni inerenti le " +
            "società che interagiscono con la A.S.D.",
        button: "Seleziona",
        src: process.env.PUBLIC_URL + "/img/staff/customers/societa_1920_1280.jpg",
        alt: "Bandi",
        linkTo: "/staff/customers/companies",
    }

]

const Customers = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid>
                <Row className="flex-wrap">
                    { cardProperties.map(card => {
                        return (
                            <CardConstructor
                                title = { card.title }
                                description = { card.description }
                                button = { card.button }
                                src = { card.src }
                                alt = { card.alt }
                                linkTo = { card.linkTo }
                            />
                        )
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default Customers;