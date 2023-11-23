import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import digital from "../Assets/Images/digital-bangladesh.png";
import ict from "../Assets/Images/ICT_Division.png";
import bd from "../Assets/Images/bcc_logo.png";
import ju from "../Assets/Images/juLogo.jpg";

function Support(props) {
    return (
        <Container fluid="true" className="text-center supportDiv">
            <Row className="m-0 p-0">
               <Col lg={6} md={6} sm={12}>
                   <Row className="m-0 p-0">
                       <h4 className="title">Supported By</h4>
                       <Col sm={4} md={4} lg={4}>
                           <img className="supportImg" src={digital} alt=""/>
                       </Col>
                       <Col sm={4} md={4} lg={4}>
                           <img className="supportImg" src={bd} alt=""/>
                       </Col>
                       <Col sm={4} md={4} lg={4}>
                           <img className="supportImg" src={ict} alt=""/>
                       </Col>
                   </Row>
               </Col>
               <Col lg={6} md={6} sm={12}>
                   <h4 className="title">Hosted By</h4>
                   <img className="supportImg" src={ju} alt=""/>
               </Col>
            </Row>
        </Container>
    );
}

export default Support;