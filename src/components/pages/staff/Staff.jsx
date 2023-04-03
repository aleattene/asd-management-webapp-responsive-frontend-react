import React from 'react';
import Container from "react-bootstrap/Container";
import {Route, Routes} from "react-router-dom";
import HomeStaff from "./HomeStaff";
import Products from "./customers/Doctors";
import StaffNavbar from "../../StaffNavbar";
import Transactions from "./documentations/Transactions";
import Invoices from "./documentations/Invoices";
import Remunerations from "./documentations/Remunerations";
import Customers from "./customers/Customers";

const Staff = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <StaffNavbar />
            <Container fluid>
                <Routes>
                    <Route path="/" element={<HomeStaff/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/customers/*" element={<Customers/>} />
                    <Route path="/transactions" element={<Transactions/>} />
                    <Route path="/invoices" element={<Invoices/>} />
                    <Route path="/remunerations" element={<Remunerations/>} />
                </Routes>

            </Container>
        </div>
    );
}

export default Staff;