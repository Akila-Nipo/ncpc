import React, {useContext} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import FormContext from "./Context/FormContext";

function ThirdContestant({fourthCall,secondCall,inputChange}) {

    const {data} = useContext(FormContext);
    return (
        <div className="firstContestant mt-5">
            <h4 className="title mb-4">Team Member-3</h4>
            <hr/>
            <Row>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x">First Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                        name="thirdUserName1"
                        onChange={inputChange}
                        value={!data.thirdUserName1===""?"":data.thirdUserName1}

                    />
                </Col>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x">Last Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="form-control"
                        name="thirdUserName2"
                        onChange={inputChange}
                        value={!data.thirdUserName2===""?"":data.thirdUserName2}

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
                        name="thirdUserEmail"
                        onChange={inputChange}
                        value={!data.thirdUserEmail===""?"":data.thirdUserEmail}

                    />
                    <label htmlFor="x">Contact Number</label>
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="form-control"
                        name="thirdUserPhone"
                        onChange={inputChange}
                        value={!data.thirdUserPhone===""?"":data.thirdUserPhone}

                    />
                    <label>Gender</label><br/>
                    <input
                        className="form-check-input"
                        type="radio"
                        name="thirdUserGender"
                        value="male"
                        onChange={inputChange}
                        checked={data.thirdUserGender==="male"}
                    /> <label className="mx-1" htmlFor="">Male</label>
                    <input
                        className="form-check-input mx-1"
                        type="radio"
                        value="female"
                        name="thirdUserGender"
                        onChange={inputChange}
                        checked={data.thirdUserGender==="female"}
                    /> <label htmlFor=""> Female</label><br/>
                    <label htmlFor="">Date of birth</label><br/>
                    <input
                        type="date"
                        className="form-control"
                        required="true"
                        name="thirdUserDob"
                        onChange={inputChange}
                        value={!data.thirdUserDob===""?"":data.thirdUserDob}

                    />
                    <label htmlFor="pp">NID/Birth Registration</label><br/>
                    <input
                        type="text"
                        className="form-control"
                        name="thirdUserNid"
                        onChange={inputChange}
                        value={!data.thirdUserNid===""?"":data.thirdUserNid}

                    />
                    <label htmlFor="available">T-shirt size</label><br/>
                    <select
                        id="available"
                        className="form-control w-25"
                        name="thirdUserTShirt"
                        onChange={inputChange}
                        value={!data.thirdUserTShirt===""?"":data.thirdUserTShirt}

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
                        name="thirdUserId"
                        onChange={inputChange}
                    />
                    {
                        data.thirdUserId?(
                            <div>Your Uploaded File is : {data.thirdUserId.name}</div>
                        ):(
                            <div>Please select a photo</div>
                        )
                    }
                    <label htmlFor="cc">Contestant Photo</label><br/>
                    <input
                        type="file"
                        className="form-control"
                        name="thirdUserPhoto"
                        onChange={inputChange}
                    />
                    {
                        data.thirdUserPhoto?(
                            <div>Your Uploaded File is : {data.thirdUserPhoto.name}</div>
                        ):(
                            <div>Please select a photo</div>
                        )
                    }
                </Col>
                <div className="d-flex">
                    <Button className="backBtn" onClick={secondCall}>Back</Button>
                    <Button className="nextBtn2" onClick={fourthCall}>Next</Button>
                </div>
            </Row>
        </div>
    );
}

export default ThirdContestant;