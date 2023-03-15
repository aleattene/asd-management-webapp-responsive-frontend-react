import { Container } from 'react-bootstrap';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light py-3">
            <Container>
                <p className="m-0">&copy; {currentYear} - ASD Management</p>
            </Container>
        </footer>
    );
}

export default Footer;


