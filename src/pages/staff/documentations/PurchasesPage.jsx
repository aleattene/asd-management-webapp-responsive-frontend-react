import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";
import {getPurchasesService} from "../../../services/documentations/purchases.service.js";

const PurchasesPage = () => {

    const [purchases, setPurchases] = useState([])

    useEffect(() => {
        getPurchases();
    }, []);

    const getPurchases = async () => {
        const data = await getPurchasesService();
        if (data) { setPurchases(data) }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid style={{ padding: "0"}}>
                <Table responsive hover
                       style={{ margin: "0",
                           border: "3px solid #343A40"}}>
                    <HeaderPurchases />
                    { /* TO FIX -> remunerations empty or not object */ }
                    {/*JSON.stringify(products)*/}
                { purchases.map((purchase) => {
                    return (
                        <RowPurchases
                            date = { purchase.date }
                            amount = { purchase.amount }
                            service = { purchase.service }
                            user = { purchase.user }
                            paymentMethod = { purchase.paymentMethod }
                        />
                    )
                })}
                    </Table>
            </Container>
        </div>
    );
}

const HeaderPurchases = () => {

    const headers = [
        "Data Acquisto",
        "Importo",
        "Servizio Acquistato",
        "Utente",
        "Metodo di Pagamento"
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


const RowPurchases = (props) => {
    return (
        <tbody style={{backgroundColor: "#FFFFF0"}}>
            <tr style={{borderBottom: "lightgray"}}>
                <td> { props.date } </td>
                <td> € { props.amount.toFixed(2) } </td>
                <td> { props.service } </td>
                <td> { props.user } </td>
                <td> { props.paymentMethod } </td>
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

export default PurchasesPage;