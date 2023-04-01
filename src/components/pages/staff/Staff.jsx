import React from 'react';
import Container from "react-bootstrap/Container";
import {Route, Routes} from "react-router-dom";
import HomeStaff from "./HomeStaff";
import Products from "./customers/Doctors";
import StaffNavbar from "../../StaffNavbar";

const Staff = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <StaffNavbar />
            <Container fluid>
                <Routes>
                    <Route path="/" element={<HomeStaff/>} />
                    <Route path="/products" element={<Products/>} />
                </Routes>

            </Container>
        </div>
    );
}

export default Staff;