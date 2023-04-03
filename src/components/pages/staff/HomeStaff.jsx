import React from 'react';
import Container from "react-bootstrap/Container";
import CardConstructor from "../../layout/Card";
import {Row} from "react-bootstrap";

const cardProperties = [
    {
        title: "Gestione Prodotti",
        description: "In questa Sezione è possibile gestire i servizi erogati dalla A.S.D.",
        button: "Seleziona",
        src: process.env.PUBLIC_URL + "/img/staff/servizio_1920_1280.jpg",
        alt: "Prodotti",
        linkTo: "./products"
    },
    {
        title: "Gestione Documentazione",
        description: "In questa sezione è possibile gestire la documentazione della A.S.D.",
        button: "Seleziona",
        src: process.env.PUBLIC_URL + "/img/staff/documentazione_1920_1280.jpg",
        alt: "Documenti",
        linkTo: "./documentations",
    },
    {
        title: "Gestione Anagrafiche",
        description: "In questa sezione è possibile gestire le schede anagrafiche dei soggetti," +
            "aventi interazione con la A.S.D.",
        button: "Seleziona",
        src: process.env.PUBLIC_URL + "/img/staff/anagrafica_1920_1280.jpg",
        alt: "Anagrafiche",
        linkTo: "./customers",
    },
    {
        title: "Gestione Bandi",
        description: "In questa sezione sono consultabili le informazioni inerenti i " +
            "bandi istituzionali a cui la A.S.D. può prendere parte.",
        button: "Seleziona",
        src: process.env.PUBLIC_URL + "/img/staff/bando_1920_1280.jpg",
        alt: "Bandi",
        linkTo: "./tenders",
    }

]

const Staff = () => {
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

export default Staff;