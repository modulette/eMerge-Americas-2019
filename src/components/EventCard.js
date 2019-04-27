import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import "./EventCard.css";

const EventCard = (props) => (
    <Col xs={12} md={4}>
        <Card className="rounded more-rounded" style={{ borderRadius: "10px", boxShadow: "0 5px 15px -2px rgba(10, 16, 34, .4)", transition: "all 200ms ease", margin: "20px" }}>
            <Card.Img variant="top" src="http://via.placeholder.com/100x100" />
            <Card.Body>
                <Card.Title>{props.event.title}</Card.Title>
                <Card.Subtitle>Published by: {props.event.user}</Card.Subtitle>
            </Card.Body>
            <Card.Footer>Categories: {props.event.categories.map((category, index) => (<Badge key={index} variant="primary">{category}</Badge>))}</Card.Footer>
        </Card>
    </Col>
)

export default EventCard;