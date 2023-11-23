import React, {useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";

function FirstContestant({secondCall}) {


    return (
        <div className="firstContestant mt-4">
            <Row>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x">Team Name</label>
                    <input
                        type="text"
                        placeholder="Team Name"
                        className="form-control"
                    />
                </Col>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x">Institute Name</label>
                    <input
                        type="text"
                        placeholder="Institute Name"
                        className="form-control"
                    />
                </Col>
            </Row>
            <h4 className="title mb-4">Team Member-1</h4>
            <hr/>
            <Row>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x">First Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                    />
                </Col>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x">Last Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label htmlFor="x">E-mail</label>
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="form-control"
                    />
                    <label htmlFor="x">Contact Number</label>
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="form-control"
                    />
                    <label>Gender</label><br/>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="male"
                    /> <label className="mx-1" htmlFor="">Male</label>
                    <input
                        className="form-check-input mx-1"
                        type="radio"
                        name="gender"
                        value="female"
                    /> <label htmlFor=""> Female</label><br/>
                    <label htmlFor="">Date of birth</label><br/>
                    <input
                        type="date"
                        className="form-control"
                        required="true"
                    />
                    <label htmlFor="pp">NID/Birth Registration</label><br/>
                    <input
                        type="text"
                        className="form-control"
                    />
                    <label htmlFor="available">T-shirt size</label><br/>
                    <select name="tShirt" id="available" className="form-control w-25">
                        <option value="">Select</option>
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XL</option>
                        <option value="">XXL</option>
                    </select>

                    <label htmlFor="cc">Contestant Id</label><br/>
                    <input
                        type="file"
                        className="form-control"
                    />
                    <label htmlFor="cc">Contestant Photo</label><br/>
                    <input
                        type="file"
                        className="form-control"
                    />
                   <div className="nextBtn">
                       <Button onClick={secondCall}>Next</Button>
                   </div>
                </Col>
            </Row>
        </div>
    );
}

export default FirstContestant;