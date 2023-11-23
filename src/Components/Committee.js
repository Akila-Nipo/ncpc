import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ChoyonSirCard from "./ChoyonSirCard";
import img from "../Assets/Images/avatar.png";

function Committee(props) {
    return (
        <Container fluid="true" className="mb-5">
            <h4 className="title mt-5 text-center">Executive Committee</h4>
            <Row className="topImg text-center">
                <ChoyonSirCard choyon={img}/>
            </Row>
            <Row className="mt-5 p-0 mx-0">
                <Col className="mb-4" lg={3} md={4} sm={6}>
                    <ChoyonSirCard choyon={img}/>
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <ChoyonSirCard choyon={img}/>
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <ChoyonSirCard choyon={img}/>
                </Col>
                <Col lg={3} md={4} sm={6}>
                    <ChoyonSirCard choyon={img}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Committee;
