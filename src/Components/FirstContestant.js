import React, {useContext} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import FormContext from "./Context/FormContext";

function FirstContestant({secondCall,inputChange}) {

    const {data} = useContext(FormContext);

    return (
        <div className="firstContestant mt-4">
            <Row>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x">Team Name</label>
                    <input
                        type="text"
                        placeholder="Team Name"
                        className="form-control"
                        name="teamName"
                        onChange={inputChange}
                        value={!data.teamName===""?"":data.teamName}
                    />
                </Col>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x">Institute Name</label>
                    <input
                        type="text"
                        placeholder="Institute Name"
                        className="form-control"
                        value={!data.instituteName===""?"":data.instituteName}
                        name="instituteName"
                        onChange={inputChange}
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
                        name="firstUserName1"
                        onChange={inputChange}
                        value={!data.firstUserName1===""?"":data.firstUserName1}
                    />
                </Col>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x">Last Name</label>
                    <input
                        type="text"
                        placeholder="Second Name"
                        className="form-control"
                        name="firstUserName2"
                        onChange={inputChange}
                        value={!data.firstUserName2===""?"":data.firstUserName2}

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
                        name="firstUserEmail"
                        onChange={inputChange}
                        value={!data.firstUserEmail===""?"":data.firstUserEmail}

                    />
                    <label htmlFor="x">Contact Number</label>
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="form-control"
                        name="firstUserPhone"
                        onChange={inputChange}
                        value={!data.firstUserPhone===""?"":data.firstUserPhone}
                    />
                    <label>Gender</label><br/>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="firstUserGender"
                        value="male"
                        onChange={inputChange}
                        checked={data.firstUserGender==="male"}
                    />
                    <label className="mx-1" htmlFor="">Male</label>
                    <input
                        className="form-check-input mx-1"
                        type="radio"
                        value="female"
                        name="firstUserGender"
                        onChange={inputChange}
                        checked={data.firstUserGender==="female"}
                    /> <label htmlFor=""> Female</label><br/>
                    <label htmlFor="">Date of birth</label><br/>
                    <input
                        type="date"
                        className="form-control"
                        required="true"
                        name="firstUserDob"
                        onChange={inputChange}
                        value={!data.firstUserDob===""?"":data.firstUserDob}
                    />
                    <label htmlFor="pp">NID/Birth Registration</label><br/>
                    <input
                        type="text"
                        className="form-control"
                        name="firstUserNid"
                        onChange={inputChange}
                        value={!data.firstUserNid===""?"":data.firstUserNid}
                    />
                    <label htmlFor="available">T-shirt size</label><br/>
                    <select
                        id="available"
                        className="form-control w-25"
                        name="firstUserTShirt"
                        onChange={inputChange}
                        value={!data.firstUserTShirt===""?"":data.firstUserTShirt}
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
                        name="firstUserId"
                        onChange={inputChange}
                    />
                    {
                        data.firstUserId?(
                            <div>Your Uploaded File is : {data.firstUserId.name}</div>
                        ):""
                    }
                    <label htmlFor="cc">Contestant Photo</label><br/>
                    <input
                        type="file"
                        className="form-control"
                        name="firstUserPhoto"
                        onChange={inputChange}
                    />
                    {
                        data.firstUserPhoto?(
                            <div>Your Uploaded File is : {data.firstUserPhoto.name}</div>
                        ):""
                    }
                    <div className="nextBtn">
                        <Button onClick={secondCall}>Next</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default FirstContestant;