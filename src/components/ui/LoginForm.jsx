import { Row, Col, Form, Button } from 'react-bootstrap';

function LoginForm() {
    return (
        <div className="bg-dark mt-1 mb-1">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <Form className="px-3 mx-auto" style={{ maxWidth: "50%" }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div className="mt-5 mb-5 mx-3">
                        <Button
                            variant="primary"
                            type="submit"
                            className="mx-3"
                            style={{ minWidth: "40%", maxWidth: "40%" }}
                        >
                            Accedi
                        </Button>
                        <Button
                            variant="primary"
                            type="submit"
                            className="mx-3"
                            style={{ minWidth: "40%", maxWidth: "40%" }}
                        >
                            Registrazione Utente
                        </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}


export default LoginForm;