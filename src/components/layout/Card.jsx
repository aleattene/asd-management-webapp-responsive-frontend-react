import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import {Link} from "react-router-dom";

function CardConstructor(props) {
    return (
        <Card className="my-3 p-0 col-lg-4 col-md-4 col-sm-6 col-xs-12"
            style={{ height: "24rem", width: '18rem', margin: "2%"}} >
            <Card.Img className="card-img-top" variant="top" src={props.src} alt={props.alt}
                      style={{ objectFit: 'cover', padding: 0, margin: 0 }} />
            <Card.Body className="card-body"
                       style={{ height: '40%', backgroundColor: "#FFFFFF"}} >
                <Card.Title className="mt-2"
                            style={{ textAlign: 'center', height: '15%'}} >
                    { props.title }
                </Card.Title>
                <Card.Text className="mt-auto"
                           style={{ height: '30%', overflowY: 'scroll', cursor: 'pointer'}} >
                    { props.description }
                </Card.Text>
                <Link to={ props.linkTo } >
                    <Button className="btn btn-primary w-100 mt-3"
                            style={{ fontSize: '0.9rem', width: '100%', height: '40px' }} >
                        { props.button }
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default CardConstructor;