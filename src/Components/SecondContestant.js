import React from 'react';
import {Button, Col, Row} from "react-bootstrap";

function SecondContestant({thirdCall,firstCall,inputChange}) {
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
                        name="secondUserName1"
                        onChange={inputChange}
                    />
                </Col>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x">Last Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                        name="secondUserName2"
                        onChange={inputChange}
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
                        name="secondUserEmail"
                        onChange={inputChange}
                    />
                    <label htmlFor="x">Contact Number</label>
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="form-control"
                        name="secondUserPhone"
                        onChange={inputChange}
                    />
                    <label>Gender</label><br/>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="secondUserGender"
                        value="male"
                        onChange={inputChange}
                    /> <label className="mx-1" htmlFor="">Male</label>
                    <input
                        className="form-check-input mx-1"
                        type="radio"
                        value="female"
                        name="secondUserGender"
                        onChange={inputChange}
                    /> <label htmlFor=""> Female</label><br/>
                    <label htmlFor="">Date of birth</label><br/>
                    <input
                        type="date"
                        className="form-control"
                        required="true"
                        name="secondUserDob"
                        onChange={inputChange}
                    />
                    <label htmlFor="pp">NID/Birth Registration</label><br/>
                    <input
                        type="text"
                        className="form-control"
                        name="secondUserNid"
                        onChange={inputChange}
                    />
                    <label htmlFor="available">T-shirt size</label><br/>
                    <select
                        id="available"
                        className="form-control w-25"
                        name="secondUserTShirt"
                        onChange={inputChange}
                    >
                        <option value="0">Select</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>

                    <label htmlFor="cc">Contestant Id</label><br/>
                    <input
                        type="file"
                        className="form-control"
                        name="secondUserId"
                        onChange={inputChange}
                    />
                    <label htmlFor="cc">Contestant Photo</label><br/>
                    <input
                        type="file"
                        className="form-control"
                        name="secondUserImage"
                        onChange={inputChange}
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
