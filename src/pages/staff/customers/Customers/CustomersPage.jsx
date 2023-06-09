import React from 'react';
import Container from "react-bootstrap/Container";
import {Route, Routes} from "react-router-dom";
import HomeCustomers from "../HomeCustomersPage.jsx";
import AthletesPage from "../Athletes/AthletesPage.jsx";
import TrainersPage from "../Trainers/TrainersPage.jsx";
import DoctorsPage from "../Doctors/DoctorsPage.jsx";
import CompaniesPage from "../Companies/CompaniesPage.jsx";

const CustomersPage = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid>
                <Routes>
                    <Route path="/" element={<HomeCustomers/>} />
                    <Route path="/athletes" element={<AthletesPage/>} />
                    <Route path="/trainers" element={<TrainersPage/>} />
                    <Route path="/doctors" element={<DoctorsPage/>} />
                    <Route path="/companies" element={<CompaniesPage/>} />
                </Routes>
            </Container>
        </div>
    );
}

export default CustomersPage;