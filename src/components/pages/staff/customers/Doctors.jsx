import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";
import {getDoctorsService} from "../../../../services/customers/doctors.service";

const Doctors = () => {

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
            <Container fluid>
                <Table responsive>
                    <HeaderDoctors />
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


const RowDoctors = (props) => {
    return (
        <tbody style={{backgroundColor: "#FFFFF0"}}>
            <tr>
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

export default Doctors;