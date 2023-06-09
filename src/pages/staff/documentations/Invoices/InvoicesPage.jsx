import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";
import {getInvoicesService} from "../../../../services/documentations/invoices.service.js";

const InvoicesPage = () => {

    const [invoices, setInvoices] = useState([])

    useEffect(() => {
        getInvoices();
    }, []);

    const getInvoices = async () => {
        const data = await getInvoicesService();
        if (data) { setInvoices(data) }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid style={{ padding: "0"}}>
                <Table responsive hover
                       style={{ margin: "0",
                           border: "3px solid #343A40"}}>
                    <HeaderInvoices />
                    { /* TO FIX -> remunerations empty or not object */ }
                    {/*JSON.stringify(products)*/}
                { invoices.map((invoice) => {
                    return (
                        <RowInvoices
                            idInvoice = { invoice.idInvoice }
                            type = { invoice.type }
                            numberInvoice = { invoice.numberInvoice }
                            description = { invoice.description }
                            amount = { invoice.amount }
                            date = { invoice.date }
                            invoiceHolder = { invoice.invoiceHolder }
                            idTransaction = { invoice.idTransaction }
                        />
                    )
                })}
                    </Table>
            </Container>
        </div>
    );
}

const HeaderInvoices = () => {

    const headers = [
        "ID Fattura",
        "Tipologia",
        "Numero",
        "Descrizione",
        "Importo",
        "Data",
        "Emittente/Destinatario",
        "ID Movimento"
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


const RowInvoices = (props) => {
    return (
        <tbody style={{backgroundColor: "#FFFFF0"}}>
        <tr style={{borderBottom: "lightgray"}}>
                <td> { props.idInvoice } </td>
                <td> { props.type }</td>
                <td> { props.numberInvoice }</td>
                <td> { props.description }</td>
                 <td> € { props.amount.toFixed(2) } </td>
                <td> { props.date } </td>
                <td> { props.invoiceHolder } </td>
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

export default InvoicesPage;