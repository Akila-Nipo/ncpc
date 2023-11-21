// Honor.js
import React from 'react';
import {Col, Container, Row } from "react-bootstrap";
import choyon from "../Assets/Images/choyon.jpg";
import ChoyonSirCard from "./ChoyonSirCard";

function Honor(props) {
    return (
        <Container fluid="true" className="text-center mt-5">
            <Row className="p-0 m-0">
                <Col md={3} lg={3} sm={12}>
                    <h4 className="title">About ju cse</h4>
                    <p className="description noticeDiv text-start p-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, ad aliquid at blanditiis commodi consequuntur corporis deleniti doloremque dolorum ducimus eos error, expedita fuga illo inventore libero natus non nulla numquam porro possimus qui quibusdam quidem, quis quo recusandae sit totam vero vitae voluptatum? Aliquid error inventore optio quaerat tempora.
                    </p>
                </Col>
                <Col md={6} lg={6} sm={12}>
                    <Row className="m-0 p-0">
                        <h4 className="title">Executives</h4>
                        <ChoyonSirCard choyon={choyon} />
                    </Row>
                    <Row className="p-0 m-0">
                        <Col className="m-0 p-0" md={6} lg={6} sm={12}>
                            <ChoyonSirCard choyon={choyon} />
                        </Col>
                        <Col className="m-0 p-0" md={6} lg={6} sm={12}>
                            <ChoyonSirCard choyon={choyon} />
                        </Col>
                    </Row>
                    <Row className="p-0 m-0">
                        <Col className="m-0 p-0" md={6} lg={6} sm={12}>
                            <ChoyonSirCard choyon={choyon} />
                        </Col>
                        <Col className="m-0 p-0" md={6} lg={6} sm={12}>
                            <ChoyonSirCard choyon={choyon} />
                        </Col>
                    </Row>
                </Col>
                <Col md={3} lg={3} sm={12}>
                    <h3 className="title">Notice</h3>
                    <div className="noticeDiv">
                        <p className="description">1. when someone clicks on your call to action, you need to click on the button element in</p>
                        <hr/>
                        <p className="description">2. when someone clicks on your call to action, you need to click on the button element in</p>
                        <hr/>
                        <p className="description">3. when someone clicks on your call to action, you need to click on the button element in</p>
                        <hr/>
                        <p className="description">4. when someone clicks on your call to action, you need to click on the button element in</p>
                        <hr/>
                        <p className="description">5. when someone clicks on your call to action, you need to click on the button element in</p>
                        <hr/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Honor;
