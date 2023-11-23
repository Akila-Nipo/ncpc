import React from 'react';
import {Button, Col, Row} from "react-bootstrap";

function SecondContestant({thirdCall,firstCall}) {
    return (
        <div className="firstContestant mt-5">
            <h4 className="title mb-4">Team Member-2</h4>
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
                    <label htmlFor="x">Contact Number:</label>
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

                </Col>
                <div className="d-flex">
                    <Button className="backBtn" onClick={firstCall}>Back</Button>
                    <Button className="nextBtn2" onClick={thirdCall}>Next</Button>
                </div>
            </Row>
        </div>
    );
}

export default SecondContestant;
