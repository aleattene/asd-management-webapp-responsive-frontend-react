import React from 'react';
import Container from "react-bootstrap/Container";
import {Route, Routes} from "react-router-dom";
import HomeStaff from "./HomeStaffPage.jsx";
import ProductsPage from "./products/ProductsPage.jsx";
import CustomersPage from "./customers/CustomersPage.jsx";
import StaffNavbar from "../../components/StaffNavbar.jsx";
import Documentations from "./documentations/DocumentationsPage.jsx";


const StaffPages = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <StaffNavbar />
            <Container fluid>
                <Routes>
                    <Route path="/" element={<HomeStaff/>} />
                    <Route path="/products/*" element={<ProductsPage/>} />
                    <Route path="/customers/*" element={<CustomersPage/>} />
                    <Route path="/documentations/*" element={<Documentations/>} />
                </Routes>
            </Container>
        </div>
    );
}

export default StaffPages;