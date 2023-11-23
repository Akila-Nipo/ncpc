import React from 'react';
import {Button, Col, Row} from "react-bootstrap";

function TeacherData({thirdCall}) {
    return (
        <div className="firstContestant mt-5">
            <h4 className="title mb-4">Coach Info</h4>
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
                    <label htmlFor="x">Designation</label>
                    <select name="" id="" className="form-control w-25">
                        <option value="">Select</option>
                        <option value="">Lecturer</option>
                        <option value="">Assistant Professor</option>
                        <option value="">Associate Professor</option>
                        <option value="">Professor</option>
                    </select>
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
                    <label htmlFor="x">Institution Name</label>
                    <input
                        type="text"
                        placeholder="Institute"
                        className="form-control"
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

                    <label htmlFor="cc">Coach Id</label><br/>
                    <input
                        type="file"
                        className="form-control"
                    />
                    <label htmlFor="cc">Coach Photo</label><br/>
                    <input
                        type="file"
                        className="form-control"
                    />

                </Col>
                <div className="d-flex">
                    <Button className="backBtn" onClick={thirdCall}>Back</Button>
                </div>

                <div className="text-center">
                    <button className="submitBtn btn btn-success">Submit</button>
                </div>
            </Row>
        </div>
    );
}

export default TeacherData;