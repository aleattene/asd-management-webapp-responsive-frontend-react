import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";
import {getRemunerationsService} from "../../../../services/documentations/renumerations.service";

const Remunerations = () => {

    const [remunerations, setRemunerations] = useState([])

    useEffect(() => {
        getRemunerations();
    }, []);

    const getRemunerations = async () => {
        const data = await getRemunerationsService();
        if (data) { setRemunerations(data) }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid>
                <Table responsive>
                    <HeaderRemunerations />
                    { /* TO FIX -> remunarations empty or not object */ }
                    {/*JSON.stringify(products)*/}
                    { /* TO FIX -> remunarations empty or not object */ }
                { remunerations.map((remun) => {
                    return (
                        <RowRemunerations
                            idRemuneration = { remun.idRemuneration }
                            trainerName = { remun.trainerName }
                            trainerSurname = { remun.trainerSurname }
                            amount = { remun.amount }
                            date = { remun.date }
                            idTransaction = { remun.idTransaction }
                        />
                    )
                })}
                    </Table>
            </Container>
        </div>
    );
}

const HeaderRemunerations = () => {

    const headers = [
        "ID Compenso",
        "Collaboratore",
        "Importo Compenso",
        "Data Erogazione",
        "ID Transazione"
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


const RowRemunerations = (props) => {
    return (
        <tbody>
            <tr>
                <td> { props.idRemuneration } </td>
                <td> { props.trainerName  + " " + props.trainerSurname } </td>
                <td> € { props.amount.toFixed(2) } </td>
                <td> { props.date } </td>
                <td> { props.idTransaction } </td>
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









export default Remunerations;