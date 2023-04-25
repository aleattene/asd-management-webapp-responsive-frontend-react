import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {getProductsService} from "../../../../services/products/products.service.js";
import {Table} from "react-bootstrap";

const ProductsPage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const data = await getProductsService();
        if (data) { setProducts(data) }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid style={{ padding: "0"}}>
                <Table responsive hover
                       style={{ margin: "0",
                           border: "3px solid #343A40"}}>
                    <HeaderProducts />
                    { /* TO FIX -> products empty or not object */ }
                {/*JSON.stringify(products)*/}
                { products.map((prod) => {
                    return (
                        <RowProducts
                            idServizio = { prod.idServizio }
                            descrizioneServizio = { prod.descrizioneServizio }
                            costo = { prod.costo }
                            stato = { prod.stato }
                        />
                    )
                })}
                    </Table>
            </Container>
        </div>
    );
}

const HeaderProducts = () => {

    const headers = [
        "ID Servizio",
        "Descrizione Servizio",
        "Costo",
        "Stato Erogazione"
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


const RowProducts = (props) => {
    return (
        <tbody style={{backgroundColor: "#FFFFF0"}}>
        <tr style={{borderBottom: "lightgray"}}>
                <td> { props.idServizio } </td>
                <td> { props.descrizioneServizio }</td>
                <td> € { props.costo.toFixed(2) } </td>
                <td> { props.stato } </td>
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

export default ProductsPage;