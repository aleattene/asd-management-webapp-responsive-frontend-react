import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";

function CardConstructor(props) {
    return (
        <Card style={{ width: '18rem', aspectRatio: '4/5' }} className="card col-md-12 mt-3">
            <Card.Img className="card-img-top" variant="top" src={props.src} alt="Servizi Offerti" />
            <Card.Body className="card-body" style={{ height: '50%' }}>
                <Card.Title className="mt-2" style={{ textAlign: 'center', height: '15%'}}>{ props.title }</Card.Title>
                <Card.Text className="mt-auto" style={{ height: '3em', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                    { props.description }
                </Card.Text>
                <Button className="btn btn-primary w-100 mt-auto" style={{ fontSize: '0.9rem' }}> { props.button }</Button>
            </Card.Body>
        </Card>
    );
}

export default CardConstructor;