import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";
import {getDoctorsService} from "../../../services/customers/doctors.service.js";

const DoctorsPage = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        getDoctors();
    }, []);

    const getDoctors = async () => {
        const data = await getDoctorsService();
        if (data) { setDoctors(data) }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid style={{ padding: "0"}}>
                <Table responsive hover
                       style={{ margin: "0",
                           border: "3px solid #343A40"}}>
                    <HeaderDoctors />
                    { /* TO FIX -> doctors empty or not object */ }
                {/*JSON.stringify(products)*/}
                { doctors.map((doc) => {
                    return (
                        <RowDoctors
                            cognome = { doc.cognome }
                            nome = { doc.nome }
                        />
                    )
                })}
                    </Table>
            </Container>
        </div>
    );
}

const HeaderDoctors = () => {

    const headers = [
        "Cognome",
        "Nome"
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


const RowDoctors = (props) => {
    return (
        <tbody style={{backgroundColor: "#FFFFF0"}}>
        <tr style={{borderBottom: "lightgray"}}>
                <td> { props.cognome } </td>
                <td> { props.nome }</td>
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

export default DoctorsPage;