import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Link from 'react-router-dom/Link';
import "./EventCard.css";

const EventCard = (props) => (
    <Col xs={12} md={4}>
        <Link to={`/event/${props.event.id}`}>
            <Card className="rounded more-rounded" style={{ borderRadius: "10px", boxShadow: "0 5px 15px -2px rgba(10, 16, 34, .4)", transition: "all 200ms ease", margin: "20px" }}>
                <Card.Img variant="top" src={props.event.thumbNail} />
                <Card.Body>
                    <Card.Title>{props.event.title}</Card.Title>
                    <Card.Subtitle>Published by: {props.event.user}</Card.Subtitle>
                </Card.Body>
                <Card.Footer>Categories: {props.event.categories.map((category, index) => (<Badge key={index} variant="primary">{category}</Badge> ))}</Card.Footer>
            </Card>
        </Link>

    </Col>
)

export default EventCard;