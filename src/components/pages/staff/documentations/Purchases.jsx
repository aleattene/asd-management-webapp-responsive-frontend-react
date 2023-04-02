import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {getProductsService} from "../../../../services/products/products.service";
import {Table} from "react-bootstrap";
import StaffNavbar from "../../../StaffNavbar";
// TO FIX -> PURCHASES
const Products = () => {

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
            <StaffNavbar />
            <Container fluid>
                <Table responsive>
                    <HeaderProducts />
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
        "TO FIX",
        "TO FIX",
        "TO FIX",
        "TO FIX"
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


const RowProducts = (props) => {
    return (
        <tbody>
            <tr>
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

export default Products;