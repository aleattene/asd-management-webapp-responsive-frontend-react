import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";
import {getTrainersService} from "../../../../services/customers/trainers.service.js";

const TrainersPage = () => {

    const [trainers, setTrainers] = useState([])

    useEffect(() => {
        getTrainers();
    }, []);

    const getTrainers = async () => {
        const data = await getTrainersService();
        if (data) { setTrainers(data) }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid style={{ padding: "0"}}>
                <Table responsive hover
                       style={{ margin: "0",
                           border: "3px solid #343A40"}}>
                    <HeaderTrainers />
                    { /* TO FIX -> remunerations empty or not object */ }
                {/*JSON.stringify(products)*/}
                { trainers.map((trainer) => {
                    return (
                        <RowTrainers
                            cognome = { trainer.cognome }
                            nome = { trainer.nome }
                            fiscalCode = { trainer.fiscalCode }
                        />
                    )
                })}
                    </Table>
            </Container>
        </div>
    );
}

const HeaderTrainers = () => {

    const headers = [
        "Cognome",
        "Nome",
        "Codice Fiscale"
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


const RowTrainers = (props) => {
    return (
        <tbody style={{backgroundColor: "#FFFFF0"}}>
            <tr style={{borderBottom: "lightgray"}}>
                <td> { props.cognome } </td>
                <td> { props.nome }</td>
                <td> { props.fiscalCode } </td>
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

export default TrainersPage;