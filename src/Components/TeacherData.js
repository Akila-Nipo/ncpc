import React from 'react';
import {Button, Col, Row} from "react-bootstrap";

function TeacherData({thirdCall,inputChange,postDataToBackend}) {
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
                        name="teacherName1"
                        onChange={inputChange}
                    />
                </Col>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x">Last Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                        name="teacherName2"
                        onChange={inputChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label htmlFor="x">Designation</label>
                    <select
                        id=""
                        className="form-control w-25"
                        name="teacherDesignation"
                        onChange={inputChange}
                    >
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
                        name="teacherEmail"
                        onChange={inputChange}
                    />
                    <label htmlFor="x">Contact Number</label>
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="form-control"
                        name="teacherPhone"
                        onChange={inputChange}
                    />
                    <label>Gender</label><br/>
                    <input
                        className="form-check-input"
                        type="radio"
                        value="male"
                        name="teacherGender"
                        onChange={inputChange}
                    /> <label className="mx-1" htmlFor="">Male</label>
                    <input
                        className="form-check-input mx-1"
                        type="radio"
                        value="female"
                        name="teacherGender"
                        onChange={inputChange}
                    /> <label htmlFor=""> Female</label><br/>

                    <label htmlFor="pp">NID/Birth Registration</label><br/>
                    <input
                        type="text"
                        className="form-control"
                        name="teacherNid"
                        onChange={inputChange}
                    />
                    <label htmlFor="available">T-shirt size</label><br/>
                    <select
                        id="available"
                        className="form-control w-25"
                        name="teacherTShirt"
                        onChange={inputChange}
                    >
                        <option value="0">Select</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>

                    <label htmlFor="cc">Coach Id</label><br/>
                    <input
                        type="file"
                        className="form-control"
                        name="teacherId"
                        onChange={inputChange}
                    />
                    <label htmlFor="cc">Coach Photo</label><br/>
                    <input
                        type="file"
                        className="form-control"
                        name="teacherPhoto"
                        onChange={inputChange}
                    />

                </Col>
                <div className="d-flex">
                    <Button className="backBtn" onClick={thirdCall}>Back</Button>
                </div>

                <div className="text-center">
                    <button className="submitBtn btn btn-success" onClick={postDataToBackend}>Submit</button>
                </div>
            </Row>
        </div>
    );
}

export default TeacherData;