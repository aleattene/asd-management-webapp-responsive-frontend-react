import React from 'react';
import { Table, Form, Button } from 'react-bootstrap';

function CustomTable({ products }) {
    return (
        <Table responsive>
            <thead>
            <tr style={{ backgroundColor: 'red' }}>
                <th>ID Servizio</th>
                <th>Descrizione Servizio</th>
                <th>Costo</th>
                <th>Stato Erogazione</th>
            </tr>
            </thead>
            <tbody>
            {/*JSON.stringify(products)*/}
            {products.map((prod) => {
                return (
                    <tr>
                        <td>{prod.id}</td>
                        <td>{prod.title}</td>
                        <td>€ 15.00</td>
                        <td>
                            <Form.Check />
                            <Form.Check disabled />
                            <Button variant="success">Attivo</Button>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </Table>
    );
}

export default CustomTable;
