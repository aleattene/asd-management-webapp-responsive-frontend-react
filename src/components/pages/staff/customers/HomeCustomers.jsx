import React from 'react';
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import CardConstructor from "../../../layout/CardComponent.jsx";
import athletesCard from "./../../../../assets/img/staff/customers/atleta_1920_1280.jpg";
import trainersCard from "./../../../../assets/img/staff/customers/collaboratore_1920_1280.jpg";
import doctorsCard from "./../../../../assets/img/staff/customers/medico_1920_1280.jpg";
import companiesCard from "./../../../../assets/img/staff/customers/societa_1920_1280.jpg";

const cardProperties = [
    {
        title: "Gestione Atleti",
        description: "In questa sezione è possibile gestire gli atleti tesserati per la A.S.D.",
        button: "Seleziona",
        src: athletesCard,
        alt: "Atleti",
        linkTo: "/staff/customers/athletes"
    },
    {
        title: "Gestione Collaboratori",
        description: "In questa sezione è possibile gestire i collaboratori della A.S.D.",
        button: "Seleziona",
        src: trainersCard,
        alt: "Collaboratori",
        linkTo: "/staff/customers/trainers",
    },
    {
        title: "Gestione Medici",
        description: "In questa sezione è possibile gestire le schede anagrafiche dei medici che rilasciano" +
            "l'idoneità sportiva agli atleti della A.S.D.",
        button: "Seleziona",
        src: doctorsCard,
        alt: "Medici",
        linkTo: "/staff/customers/doctors",
    },
    {
        title: "Gestione Società",
        description: "In questa sezione sono consultabili le informazioni inerenti le " +
            "società che interagiscono con la A.S.D.",
        button: "Seleziona",
        src: companiesCard,
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