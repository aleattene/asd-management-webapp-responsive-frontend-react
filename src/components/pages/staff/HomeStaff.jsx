import React from 'react';
import Container from "react-bootstrap/Container";
import StaffNavbar from "../../StaffNavbar";

const HomeStaff = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <StaffNavbar />
            <Container fluid>
                ELENCO CARD
            </Container>
        </div>
    );
}

export default HomeStaff;