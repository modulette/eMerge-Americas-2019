import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Badge from 'react-bootstrap/Badge'

const UserDetails = (props) => (
    <Container>
        <Row>
            <Col xs={12} md={4}>
                <Card className="rounded more-rounded" style={{boxShadow: "0 5px 15px -2px rgba(10, 16, 34, .4)", transition: "all 200ms ease", margin: "20px" }}>
                    <Card.Body>
                        <Image fluid src={props.user.img} roundedCircle></Image>
                        <Card.Title>{props.user.first} {props.user.last}</Card.Title>
                        <Card.Subtitle><ProgressBar now={100} label={`${props.user.points} points!`}  /></Card.Subtitle>
                        <Card.Text><br/>Events Attended</Card.Text>
                        {props.user.events ? props.user.events.map((event, index) => (
                            <Card.Text key={index}><Badge variant="warning">{event}</Badge></Card.Text>
                        )): null}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default UserDetails;