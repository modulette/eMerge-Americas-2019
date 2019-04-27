import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Badge from 'react-bootstrap/Badge'
import API from '../utils/API';

const UserDetails = (props) => {

    const [user, setUser] = useState("");

    useEffect(() => {
        API.getUserById(1).then((res) => {
            setUser(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return(
    <Container>
        <Row>
            <Col xs={12} md={4}>
                <Card className="rounded more-rounded" style={{boxShadow: "0 5px 15px -2px rgba(10, 16, 34, .4)", transition: "all 200ms ease", margin: "20px" }}>
                    <Card.Body>
                        <Image fluid src={user.img} roundedCircle></Image>
                        <Card.Title>{user.first} {user.last}</Card.Title>
                        <Card.Subtitle><ProgressBar now={100} label={`${user.points} points!`}  /></Card.Subtitle>
                        <Card.Text><br/>Events Attended</Card.Text>
                        {user.events ? user.events.map((event, index) => (
                            <Card.Text key={index}><Badge variant="warning">{event}</Badge></Card.Text>
                        )): null}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    );
};

export default UserDetails;