import React, {useContext} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import FormContext from "./Context/FormContext";

function SecondContestant({thirdCall,firstCall,inputChange}) {

    const {data} = useContext(FormContext);

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
                        value={!data.secondUserName1===""?"":data.secondUserName1}

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
                        value={!data.secondUserName2===""?"":data.secondUserName2}

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
                        value={!data.secondUserEmail===""?"":data.secondUserEmail}

                    />
                    <label htmlFor="x">Contact Number</label>
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="form-control"
                        name="secondUserPhone"
                        onChange={inputChange}
                        value={!data.secondUserPhone===""?"":data.secondUserPhone}

                    />
                    <label>Gender</label><br/>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="secondUserGender"
                        value="male"
                        onChange={inputChange}
                        checked={data.secondUserGender==="male"}
                    /> <label className="mx-1" htmlFor="">Male</label>
                    <input
                        className="form-check-input mx-1"
                        type="radio"
                        value="female"
                        name="secondUserGender"
                        onChange={inputChange}
                        checked={data.secondUserGender==="female"}
                    /> <label htmlFor=""> Female</label><br/>
                    <label htmlFor="">Date of birth</label><br/>
                    <input
                        type="date"
                        className="form-control"
                        required="true"
                        name="secondUserDob"
                        onChange={inputChange}
                        value={!data.secondUserDob===""?"":data.secondUserDob}

                    />
                    <label htmlFor="pp">NID/Birth Registration</label><br/>
                    <input
                        type="text"
                        className="form-control"
                        name="secondUserNid"
                        onChange={inputChange}
                        value={!data.secondUserNid===""?"":data.secondUserNid}

                    />
                    <label htmlFor="available">T-shirt size</label><br/>
                    <select
                        id="available"
                        className="form-control w-25"
                        name="secondUserTShirt"
                        onChange={inputChange}
                        value={!data.secondUserTShirt===""?"":data.secondUserTShirt}

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
                    {
                        data.secondUserId?(
                            <div>Your Uploaded File is : {data.secondUserId.name}</div>
                        ):(
                            <div>Please select a photo</div>
                        )
                    }
                    <label htmlFor="cc">Contestant Photo</label><br/>
                    <input
                        type="file"
                        className="form-control"
                        name="secondUserPhoto"
                        onChange={inputChange}
                    />
                    {
                        data.secondUserPhoto?(
                            <div>Your Uploaded File is : {data.secondUserPhoto.name}</div>
                        ):(
                            <div>Please select a photo</div>
                        )
                    }
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