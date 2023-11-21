import React, {Fragment} from 'react';
import {Button, Card, Carousel, Col, Container, Row} from "react-bootstrap";

function TopBanner(props) {
    return (
        <Fragment>
            <marquee className="mar" behavior="" direction="">**NCPC CSE JU**</marquee>
            <Container fluid="true" className="topBanner">
                <Row className="p-0 m-0">
                    <Col className="m-0 p-0" lg={3} md={3} sm={12}>
                        <Card className="card">
                            <Card.Body>
                                <img className="cardImg" src="https://juniv.edu/storage/image/administration/BDTi5y9MuACqTZV9DPHyJkJx3qpswVRBOQfK37J9.jpg"  alt="af"/>
                                <Card.Title className="title mt-1">VC JU</Card.Title>
                                <Card.Text className="description">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="m-0 p-0" lg={6} md={6} sm={12}>
                        <Carousel className="card">
                            <Carousel.Item>
                                <img className="carouselImg" src="https://juniv.edu/storage/image/gallery/NMYT0PnV9SSOx4IAzRUrg6UwweXWq1WBXshVwkNr.jpg" alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtn">Register Now</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImg" src="https://juniv.edu/storage/image/gallery/6122_banner_bsmr_hall-3816f4.jpg" alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtn">Register Now</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImg" src="https://juniv.edu/storage/image/gallery/6121_banner_library-12a970.jpg" alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtn">Register Now</Button>>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImg" src="https://juniv.edu/storage/image/gallery/wV9mgeB6A4nkMxihqKmPJ2tcCBB1YLdv5IVysRq1.jpg" alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtn">Register Now</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carouselImg" src="https://juniv.edu/storage/image/gallery/9wLQQCnx1eHfGeWG82uxBP67lv8fpdgPICigKt9o.jpg" alt=""/>
                                <Carousel.Caption>
                                    {/*white here some caption*/}
                                    <Button className="contactBtn">Register Now</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className="p-0" lg={3} md={3} sm={12}>
                        <Card className="card">
                            <Card.Body>
                                <img className="cardImg" src="https://juniv.edu/storage/image/teacher/gmvOTE1YBVHXgiq4m8kNTh0pXSgpZ7DZet1V7NRa.png" alt=""/>
                                <Card.Title className="title">Chairman Ju CSE</Card.Title>
                                <Card.Text className="description">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default TopBanner;

