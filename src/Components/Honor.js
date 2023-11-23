// Honor.js
import React from 'react';
import {Col, Container, Row } from "react-bootstrap";
import choyon from "../Assets/Images/choyon.jpg";
import ChoyonSirCard from "./ChoyonSirCard";

function Honor(props) {
    return (
        <Container fluid="true" className="text-center mt-5 honorContainer">
            <Row className="p-0 m-0">
                <Col className="noticeDiv" md={8} lg={8} sm={12}>
                    <h4 className="noticeTitle text-center">About JU CSE</h4>
                    <img className="juShoidMinar" src="https://i.pinimg.com/originals/9c/b5/0e/9cb50e29be9f450bb8e0b36d4f8ccdf6.jpg" alt=""/>
                    <p className="description text-start p-3">

                        <hr/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aliquid at blanditiis commodi consequuntur corporis deleniti doloremque dolorum ducimus eos error, expedita fuga illo inventore libero natus non nulla numquam porro possimus qui quibusdam quidem, quis quo recusandae sit totam vero vitae voluptatum? Aliquid error inventore optio quaerat tempora.
                    </p>
                </Col>

                <Col md={4} lg={4} sm={12}>
                    <div className="noticeDiv">
                        <h3 className="noticeTitle">Notice</h3>
                        <hr/>
                        <a href="#">1. Registration Rules</a>
                        <hr/>
                        <a href="#">2. Accomodation</a>
                        <hr/>
                        <a href="#">3. Payment Details</a>
                        <hr/>
                        <a href="#">4. Main Contest Date</a>
                        <hr/>
                        <a href="#">5. Action</a>
                        <hr/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Honor;
