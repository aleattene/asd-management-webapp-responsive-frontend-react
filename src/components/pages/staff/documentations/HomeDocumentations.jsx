import React from 'react';
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import CardConstructor from "../../../layout/Card";

const cardProperties = [
    {
        title: "Movimenti Finanziari",
        description: "In questa sezione è possibile gestire i movimenti finanziari della A.S.D.",
        button: "Seleziona",
        src: process.env.PUBLIC_URL + "/img/staff/documentations/movimento_1920_1280.jpg",
        alt: "Movimenti Finanziari",
        linkTo: "/staff/documentations/transactions"
    },
    {
        title: "Iscrizioni Atleti",
        description: "In questa sezione è possibile gestire le iscrizioni degli atleti alla A.S.D.",
        button: "Seleziona",
        src: process.env.PUBLIC_URL + "/img/staff/documentations/iscrizione_1920_1280.jpg",
        alt: "Iscrizioni",
        linkTo: "/staff/documentations/enrollments",
    },
    {
        title: "Certificazioni Sanitarie",
        description: "In questa sezione è possibile gestire le certificazioni di idoneità sportiva " +
            "degli atleti iscritti alla A.S.D.",
        button: "Seleziona",
        src: process.env.PUBLIC_URL + "/img/staff/documentations/certificazione_1920_1280.jpg",
        alt: "Certificazioni Sanitarie",
        linkTo: "/staff/documents/healtcerts",
    },
    {
        title: "Compensi Collaboratori",
        description: "In questa sezione è possibile gestire i compensi relativi ai collaboratori " +
            "che interagiscono con la A.S.D.",
        button: "Seleziona",
        src: process.env.PUBLIC_URL + "/img/staff/documentations/compenso_1920_1280.jpg",
        alt: "Compensi",
        linkTo: "/staff/documentations/remunerations",
    },
    {
        title: "Gestione Fatture",
        description: "In questa sezione è possibile gestire le fatture relative alla A.S.D.",
        button: "Seleziona",
        src: process.env.PUBLIC_URL + "/img/staff/documentations/fattura_1920_1280.jpg",
        alt: "Fatture",
        linkTo: "/staff/documentations/invoices",
    },
    {
        title: "Registrazione Acquisti",
        description: "In questa sezione è possibile gestire gli acquisti effettuati dalla A.S.D.",
        button: "Seleziona",
        src: process.env.PUBLIC_URL + "/img/staff/documentations/acquisto_1920_1280.jpg",
        alt: "Acquisti",
        linkTo: "/staff/documentations/purchases",
    },
    {
        title: "Ricevute Fiscali",
        description: "In questa sezione è possibile gestire le ricevute fiscale della A.S.D.",
        button: "Seleziona",
        src: process.env.PUBLIC_URL + "/img/staff/documentations/ricevuta_1920_1280.jpg",
        alt: "Ricevute",
        linkTo: "/staff/customers/receipts",
    },
    {
        title: "Title",
        description: "Work in progess",
        button: "Seleziona",
        src: process.env.PUBLIC_URL + "/img/staff/documentations/tmp_1920_1200.jpg",
        alt: "Work in progress",
        linkTo: "/staff/documentations",
    }
]

const Documentations = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid>
                <Row className="flex-wrap justify-content-between">
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

export default Documentations;