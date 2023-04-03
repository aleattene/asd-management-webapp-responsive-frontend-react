import React from 'react';
import Container from "react-bootstrap/Container";
import {Route, Routes} from "react-router-dom";
import HomeCustomers from "./HomeCustomers";
import Athletes from "./Athletes";
import Trainers from "./Trainers";
import Doctors from "./Doctors";
import Companies from "./Companies";

const Customers = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid>
                <Routes>
                    <Route path="/" element={<HomeCustomers/>} />
                    <Route path="/athletes" element={<Athletes/>} />
                    <Route path="/trainers" element={<Trainers/>} />
                    <Route path="/doctors" element={<Doctors/>} />
                    <Route path="/companies" element={<Companies/>} />
                </Routes>

            </Container>
        </div>
    );
}

export default Customers;