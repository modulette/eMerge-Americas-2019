import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import MultiCreateInput from './MultiCreateInput';
import Button from 'react-bootstrap/Button';
import API from "../utils/API";

function EventForm() {
    const [title, setTitle,] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        const data = { title, "categories":category, "thumbNail":image , user:"Fulton"}
        API.createEvents(data).then((data)=>{
            alert(JSON.stringify(data));
        }).catch(err=> console.log(err))
    }

    function handleTitleChange(e) {
        setTitle(e.currentTarget.value);
    }
    function handleImageChange(e) {
        setImage(e.currentTarget.value);
    }

    function handleCategoryChange(value){
        setCategory(value.map(obj => obj.label));
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={8} xs={12}>
                    <Card style={{ borderRadius: "10px", boxShadow: "0 5px 15px -2px rgba(10, 16, 34, .4)", transition: "all 200ms ease", margin: "20px" }}>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Event Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Event Title" value={title} onChange={handleTitleChange} required/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Categories</Form.Label>
                                    <MultiCreateInput handleChange={handleCategoryChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Image Link</Form.Label>
                                    <Form.Control type="text" placeholder="Image Link" value={image} onChange={handleImageChange} required/>
                                </Form.Group>
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default EventForm;