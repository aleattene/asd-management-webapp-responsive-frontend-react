import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";
import {getCompaniesService} from "../../../../services/customers/companies.service";

const Companies = () => {

    const [companies, setCompanies] = useState([])

    useEffect(() => {
        getCompanies();
    }, []);

    const getCompanies = async () => {
        const data = await getCompaniesService();
        if (data) { setCompanies(data) }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid style={{ padding: "0"}}>
                <Table responsive hover
                       style={{ margin: "0",
                           border: "3px solid #343A40"}}>
                    <HeaderCompanies />
                    {/*JSON.stringify(products)*/}
                    { /* TO FIX -> companies empty or not object */ }
                    { companies.map((company) => {
                        return (
                            <RowCompanies
                                codCompany = { company.codCompany }
                                businessName = { company.businessName }
                            />
                        )
                    })}
                    </Table>
            </Container>
        </div>
    );
}

const HeaderCompanies = () => {

    const headers = [
        "Codice Società",
        "Ragione Sociale"
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


const RowCompanies = (props) => {
    return (
        <tbody style={{backgroundColor: "#FFFFF0"}}>
        <tr style={{borderBottom: "lightgray"}}>
                <td> { props.codCompany } </td>
                <td> { props.businessName }</td>
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

export default Companies;