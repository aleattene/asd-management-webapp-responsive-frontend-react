import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";
import {getEnrollmentsService} from "../../../services/documentations/enrollments.service.js";

const EnrollmentsPage = () => {

    const [enrollments, setEnrollments] = useState([])

    useEffect(() => {
        getEnrollments();
    }, []);

    const getEnrollments = async () => {
        const data = await getEnrollmentsService();
        if (data) { setEnrollments(data) }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid style={{ padding: "0"}}>
                <Table responsive hover
                       style={{ margin: "0",
                           border: "3px solid #343A40"}}>
                    <HeaderEnrollments />
                    { /* TO FIX -> enrollments empty or not object */ }
                    {/*JSON.stringify(products)*/}
                { enrollments.map((enrollment) => {
                    return (
                        <RowEnrollments
                            idEnrollment = { enrollment.idEnrollment }
                            date = { enrollment.date }
                            nameAthlete = { enrollment.nameAthlete }
                            surnameAthlete = { enrollment.surnameAthlete }
                        />
                    )
                })}
                    </Table>
            </Container>
        </div>
    );
}

const HeaderEnrollments = () => {

    const headers = [
        "ID Iscrizione",
        "Data Iscrizione",
        "Atleta"
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


const RowEnrollments = (props) => {
    return (
        <tbody style={{backgroundColor: "#FFFFF0"}}>
        <tr style={{borderBottom: "lightgray"}}>
                <td> { props.idEnrollment } </td>
                <td> { props.date }</td>
                <td> { props.surnameAthlete + " " + props.nameAthlete } </td>
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

export default EnrollmentsPage;