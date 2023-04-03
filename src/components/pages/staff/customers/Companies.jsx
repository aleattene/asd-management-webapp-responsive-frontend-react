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
             <Container fluid>
                <Table responsive>
                    <HeaderCompanies />
                {/*JSON.stringify(products)*/}
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


const RowCompanies = (props) => {
    return (
        <tbody style={{backgroundColor: "#FFFFF0"}}>
            <tr>
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