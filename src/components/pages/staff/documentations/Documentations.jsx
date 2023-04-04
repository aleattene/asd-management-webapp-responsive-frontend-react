import React from 'react';
import Container from "react-bootstrap/Container";
import {Route, Routes} from "react-router-dom";
import HomeDocumentations from "./HomeDocumentations";
import Transactions from "./Transactions";
import Invoices from "./Invoices";
import Remunerations from "./Remunerations";
import Enrollments from "./Enrollments";
import Healtcerts from "./Healtcerts";
import Purchases from "./Purchases";

const Customers = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid>
                <Routes>
                    <Route path="/" element={<HomeDocumentations/>} />
                    <Route path="/transactions" element={<Transactions/>} />
                    <Route path="/invoices" element={<Invoices/>} />
                    <Route path="/remunerations" element={<Remunerations/>} />
                    <Route path="/enrollments" element={<Enrollments/>} />
                    <Route path="/healtcerts" element={<Healtcerts/>} />
                    <Route path="/purchases" element={<Purchases/>} />
                </Routes>
            </Container>
        </div>
    );
}

export default Customers;