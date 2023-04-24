import React from 'react';
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import CardConstructor from "../../../components/layout/CardComponent.jsx";
import transactionsCard from '../../../assets/img/staff/documentations/movimento_1920_1280.jpg'
import enrollmentsCard from '../../../assets/img/staff/documentations/iscrizione_1920_1280.jpg'
import healtcertsCard from '../../../assets/img/staff/documentations/certificazione_1920_1280.jpg'
import remunerationsCard from '../../../assets/img/staff/documentations/compenso_1920_1280.jpg'
import invoicesCard from '../../../assets/img/staff/documentations/fattura_1920_1280.jpg'
import purchasesCard from '../../../assets/img/staff/documentations/acquisto_1920_1280.jpg'
import receiptsCard from '../../../assets/img/staff/documentations/ricevuta_1920_1280.jpg'
import documentationsCard from '../../../assets/img/staff/documentations/tmp_1920_1200.jpg'


const cardProperties = [
    {
        title: "Movimenti Finanziari",
        description: "In questa sezione è possibile gestire i movimenti finanziari della A.S.D.",
        button: "Seleziona",
        src: transactionsCard,
        alt: "Movimenti Finanziari",
        linkTo: "/staff/documentations/transactions"
    },
    {
        title: "Iscrizioni Atleti",
        description: "In questa sezione è possibile gestire le iscrizioni degli atleti alla A.S.D.",
        button: "Seleziona",
        src: enrollmentsCard,
        alt: "Iscrizioni",
        linkTo: "/staff/documentations/enrollments",
    },
    {
        title: "Certificazioni Sanitarie",
        description: "In questa sezione è possibile gestire le certificazioni di idoneità sportiva " +
            "degli atleti iscritti alla A.S.D.",
        button: "Seleziona",
        src: healtcertsCard,
        alt: "Certificazioni Sanitarie",
        linkTo: "/staff/documentations/healtcerts",
    },
    {
        title: "Compensi Collaboratori",
        description: "In questa sezione è possibile gestire i compensi relativi ai collaboratori " +
            "che interagiscono con la A.S.D.",
        button: "Seleziona",
        src: remunerationsCard,
        alt: "Compensi",
        linkTo: "/staff/documentations/remunerations",
    },
    {
        title: "Gestione Fatture",
        description: "In questa sezione è possibile gestire le fatture relative alla A.S.D.",
        button: "Seleziona",
        src: invoicesCard,
        alt: "Fatture",
        linkTo: "/staff/documentations/invoices",
    },
    {
        title: "Registrazione Acquisti",
        description: "In questa sezione è possibile gestire gli acquisti effettuati dalla A.S.D.",
        button: "Seleziona",
        src: purchasesCard,
        alt: "Acquisti",
        linkTo: "/staff/documentations/purchases",
    },
    {
        title: "Ricevute Fiscali",
        description: "In questa sezione è possibile gestire le ricevute fiscale della A.S.D.",
        button: "Seleziona",
        src: receiptsCard,
        alt: "Ricevute",
        linkTo: "/staff/documentations/receipts",
    },
    {
        title: "Title",
        description: "Work in progess",
        button: "Seleziona",
        src: documentationsCard,
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