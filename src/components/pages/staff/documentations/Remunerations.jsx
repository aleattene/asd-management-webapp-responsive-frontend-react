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
            <Container fluid style={{ padding: "0"}}>
                <Table responsive hover
                       style={{ margin: "0",
                           border: "3px solid #343A40"}}>
                    <HeaderRemunerations />
                    { /* TO FIX -> remunerations empty or not object */ }
                    {/*JSON.stringify(products)*/}
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


const RowRemunerations = (props) => {
    return (
        <tbody style={{backgroundColor: "#FFFFF0"}}>
            <tr style={{borderBottom: "lightgray"}}>
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