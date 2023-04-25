import React from 'react';
import Container from "react-bootstrap/Container";
import AdminNavbar from "../../components/layout/Navbar/AdminNavbar.jsx";

const HomeAdminPage = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <AdminNavbar />
            <Container fluid>
                ADMIN AREA
            </Container>
        </div>
    );
}

export default HomeAdminPage;