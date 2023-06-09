import Container from "react-bootstrap/Container";

function FooterComponent() {
    const currentYear = new Date().getFullYear();

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid>
                <footer className="bg-dark text-light py-3 mt-1">
                        <p className="m-0">&copy; {currentYear} - ASD Management</p>
                </footer>
            </Container>
        </div>
    );
}

export default FooterComponent;


