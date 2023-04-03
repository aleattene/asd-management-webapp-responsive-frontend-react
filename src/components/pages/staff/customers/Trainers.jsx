import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";
import {getTrainersService} from "../../../../services/customers/trainers.service";

const Trainers = () => {

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
            <Container fluid>
                <Table responsive>
                    <HeaderTrainers />
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
        <thead>
            <tr style={{bgColor: "red"}}>
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
            <tr>
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

export default Trainers;