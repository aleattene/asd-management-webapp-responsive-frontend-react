import React from 'react';
import Container from "react-bootstrap/Container";
import {Route, Routes} from "react-router-dom";
import HomeStaff from "./HomeStaff";
import Products from "./products/Products";
import Customers from "./customers/Customers";
import StaffNavbar from "../../StaffNavbar";
import Documentations from "./documentations/Documentations";


const Staff = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <StaffNavbar />
            <Container fluid>
                <Routes>
                    <Route path="/" element={<HomeStaff/>} />
                    <Route path="/products/*" element={<Products/>} />
                    <Route path="/customers/*" element={<Customers/>} />
                    <Route path="/documentations/*" element={<Documentations/>} />
                </Routes>
            </Container>
        </div>
    );
}

export default Staff;