import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import EventCard from './EventCard';

const CardList = (props) =>(
    <Container>
        <Row className="card-list">
            {props.events.map((event, index) =>(<EventCard key={index} event={event} />))}
        </Row>
      </Container>
)

export default CardList;