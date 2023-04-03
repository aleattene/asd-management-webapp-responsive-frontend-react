import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";
import {getAthletesService} from "../../../../services/customers/athletes.service";

const Athletes = () => {

    const [athletes, setAthletes] = useState([])

    useEffect(() => {
        getAthletes();
    }, []);

    const getAthletes = async () => {
        const data = await getAthletesService();
        if (data) { setAthletes(data) }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column' }}>
            <Container fluid style={{ padding: "0"}}>
                <Table responsive hover
                       style={{ margin: "0",
                           border: "3px solid #343A40"}}>
                    <HeaderAthletes />
                    { /* TO FIX -> athletes empty or not object */ }
                {/*JSON.stringify(products)*/}
                { athletes.map((athlete) => {
                    return (
                        <RowAthletes
                            atleta = { athlete.cognome + " " + athlete.nome }
                            dataNascita = { athlete.dataNascita }
                            luogoNascita = { athlete.luogoNascita }
                            statoTesseramento = { athlete.statoTesseramento }
                        />
                    )
                })}
                    </Table>
            </Container>
        </div>
    );
}

const HeaderAthletes = () => {

    const headers = [
        "Atleta",
        "Data Nascita",
        "Luogo Nascita",
        "Tesseramento"
    ]

    return (
        <thead style={{backgroundColor: "#FFB691"}}>
        <tr style={{
            fontWeight: "600",
            color: "#343A40"}}>
                {headers.map(h => {
                    return (
                        <td> { h } </td>
                    )
                })}
            </tr>
        </thead>
        )
};


const RowAthletes = (props) => {
    return (
        <tbody style={{backgroundColor: "#FFFFF0"}}>
            <tr style={{borderBottom: "lightgray"}}>
                <td> { props.atleta } </td>
                <td> { props.dataNascita }</td>
                <td> { props.luogoNascita } </td>
                <td> { props.statoTesseramento } </td>
                {/* <td>
                    <Form.Check/>
                    <Form.Check disabled/>
                    <Button variant="success">Attivo</Button>
                </td>
                */}
            </tr>
        </tbody>
    )
}

export default Athletes;