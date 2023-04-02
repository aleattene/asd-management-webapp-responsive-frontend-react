import React from 'react';
import Container from "react-bootstrap/Container";
import {Route, Routes} from "react-router-dom";
import HomeStaff from "./HomeStaff";
import Products from "./customers/Doctors";
import StaffNavbar from "../../StaffNavbar";
import Athletes from "./customers/Athletes";
import Trainers from "./customers/Trainers";
import Doctors from "./customers/Doctors";
import Companies from "./customers/Companies";
import Transactions from "./documentations/Transactions";
import Invoices from "./documentations/Invoices";
import Remunerations from "./documentations/Remunerations";

const Staff = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <StaffNavbar />
            <Container fluid style={{minWidth: "80%"}}>
                <Routes>
                    <Route path="/" element={<HomeStaff/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/athletes" element={<Athletes/>} />
                    <Route path="/trainers" element={<Trainers/>} />
                    <Route path="/doctors" element={<Doctors/>} />
                    <Route path="/companies" element={<Companies/>} />
                    <Route path="/transactions" element={<Transactions/>} />
                    <Route path="/invoices" element={<Invoices/>} />
                    <Route path="/remunerations" element={<Remunerations/>} />
                </Routes>

            </Container>
        </div>
    );
}

export default Staff;