import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Footer(props) {
    return (
        <Container fluid="true" className="footer">
            <Row>
                <Col md={6} sm={12} lg={6}>
                    <h4>Important Link</h4>
                    <a href="">Notice</a><br/>
                    <a href="">Registration</a><br/>
                    <a href="">JU CSE</a><br/>

                </Col>
                <Col md={6} sm={12} lg={6}>
                    <h4>Contact Us</h4>
                    <h6>Department of Computer Science & Engineering</h6>
                    <h6>Jahangirnagar University, Savar, Dhaka-1342</h6>
                    <h6>01824340471</h6>
                    <h6>@gmail.com</h6>
                    <h6>fb,ins,link,twitter</h6>
                </Col>
            </Row>
            <Row>
                <div className="footerCredit text-center">
                    <p>&copy; 2023 <a href="#">ju_ncpc.com</a>. All rights reserved. Designed by <span>JU_Pentium</span> </p>
                </div>
            </Row>
        </Container>
    );
}

export default Footer;