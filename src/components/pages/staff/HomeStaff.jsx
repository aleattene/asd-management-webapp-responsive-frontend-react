import React from 'react';
import Container from "react-bootstrap/Container";
import CardConstructor from "../../layout/Card";

const Staff = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid>
                <div className="row">
                    <div className="col-md-3">
                        <CardConstructor
                            title = "Servizi"
                            description = "In questa Sezione è possibile gestire i servizi erogati della A.S.D."
                            button = "Seleziona"
                            src = {process.env.PUBLIC_URL + "/img/servizio_1920_1280.jpg"}
                        />
                     </div>
                </div>
            </Container>
        </div>
    );
}

export default Staff;