import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";
import {getHealtcertsService} from "../../../../services/documentations/healtcerts.service.js";

const HealtcertsPage = () => {

    const [healtcerts, setHealtcerts] = useState([])

    useEffect(() => {
        getHealtcerts();
    }, []);

    const getHealtcerts = async () => {
        const data = await getHealtcertsService();
        if (data) { setHealtcerts(data) }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid style={{ padding: "0"}}>
                <Table responsive hover
                       style={{ margin: "0",
                           border: "3px solid #343A40"}}>
                    <HeaderHealtcerts />
                    { /* TO FIX -> remunerations empty or not object */ }
                    {/*JSON.stringify(products)*/}
                { healtcerts.map((cert) => {
                    return (
                        <RowHealtcerts
                            idCerts = { cert.idCerts }
                            nameAthlete = { cert.nameAthlete }
                            surnameAthlete = { cert.surnameAthlete }
                            dateStart = { cert.dateStart }
                            dateEnd = { cert.dateEnd }
                            nameDoctor = { cert.nameDoctor }
                            surnameDoctor = { cert.surnameDoctor }
                        />
                    )
                })}
                    </Table>
            </Container>
        </div>
    );
}

const HeaderHealtcerts = () => {

    const headers = [
        "ID Certificato",
        "Atleta",
        "Data Inizio Validità",
        "Data Scadenza",
        "Medico Responsabile"
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


const RowHealtcerts = (props) => {
    return (
        <tbody style={{backgroundColor: "#FFFFF0"}}>
        <tr style={{borderBottom: "lightgray"}}>
            <td> { props.idCerts } </td>
            <td> { props.surnameAthlete + " " + props.nameAthlete } </td>
            <td> { props.dateStart }</td>
            <td> { props.dateEnd }</td>
            <td> { props.surnameDoctor + " " + props.nameDoctor } </td>
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

export default HealtcertsPage;