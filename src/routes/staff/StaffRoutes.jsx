import React from 'react';
import Container from "react-bootstrap/Container";
import {Route, Routes} from "react-router-dom";
import HomeStaffPage from "../../pages/staff/HomeStaffPage.jsx";
import ProductsPage from "../../pages/staff/products/Products/ProductsPage.jsx";
import CustomersPage from "../../pages/staff/customers/Customers/CustomersPage.jsx";
import StaffNavbar from "../../components/layout/Navbar/StaffNavbar.jsx";
import DocumentationsPage from "../../pages/staff/documentations/Documentations/DocumentationsPage.jsx";


const StaffRoutes = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <StaffNavbar />
            <Container fluid>
                <Routes>
                    <Route path="/" element={<HomeStaffPage/>} />
                    <Route path="/products/*" element={<ProductsPage/>} />
                    <Route path="/customers/*" element={<CustomersPage/>} />
                    <Route path="/documentations/*" element={<DocumentationsPage/>} />
                </Routes>
            </Container>
        </div>
    );
}

export default StaffRoutes;