import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";
import {getTransactionsService} from "../../../../services/documentations/transactions.service";

const Transactions = () => {

    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        getTransactions();
    }, []);

    const getTransactions = async () => {
        const data = await getTransactionsService();
        if (data) { setTransactions(data) }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid>
                <Table responsive>
                    <HeaderTransactions />
                {/*JSON.stringify(products)*/}
                { transactions.map((transaction) => {
                    return (
                        <RowTransactions
                            idTransaction = { transaction.idTransaction }
                            description = { transaction.description }
                            amount = { transaction.amount }
                            mode = { transaction.mode }
                            date = { transaction.date }
                        />
                    )
                })}
                    </Table>
            </Container>
        </div>
    );
}

const HeaderTransactions = () => {

    const headers = [
        "ID Transazione",
        "Descrizione",
        "Importo",
        "Modalità Pagamento",
        "Data"
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


const RowTransactions = (props) => {
    return (
        <tbody>
            <tr>
                <td> { props.idTransaction } </td>
                <td> { props.description }</td>
                <td> € { props.amount.toFixed(2) } </td>
                <td> { props.mode } </td>
                <td> { props.date } </td>
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

export default Transactions;