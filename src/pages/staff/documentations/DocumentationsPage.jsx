import React from 'react';
import Container from "react-bootstrap/Container";
import {Route, Routes} from "react-router-dom";
import HomeDocumentations from "./HomeDocumentationsPage.jsx";
import TransactionsPage from "./TransactionsPage.jsx";
import InvoicesPage from "./InvoicesPage.jsx";
import RemunerationsPage from "./RemunerationsPage.jsx";
import EnrollmentsPage from "./EnrollmentsPage.jsx";
import HealtcertsPage from "./HealtcertsPage.jsx";
import PurchasesPage from "./PurchasesPage.jsx";

const Customers = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid>
                <Routes>
                    <Route path="/" element={<HomeDocumentations/>} />
                    <Route path="/transactions" element={<TransactionsPage/>} />
                    <Route path="/invoices" element={<InvoicesPage/>} />
                    <Route path="/remunerations" element={<RemunerationsPage/>} />
                    <Route path="/enrollments" element={<EnrollmentsPage/>} />
                    <Route path="/healtcerts" element={<HealtcertsPage/>} />
                    <Route path="/purchases" element={<PurchasesPage/>} />
                </Routes>
            </Container>
        </div>
    );
}

export default Customers;