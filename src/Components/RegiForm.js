import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import FirstContestant from "./FirstContestant";
import SecondContestant from "./SecondContestant";
import ThirdContestant from "./ThirdContestant";
import TeacherData from "./TeacherData";

function RegiForm(props) {

    const [first,setFirst] = useState(true);
    const [second,setSecond] = useState(false);
    const [third,setThird] = useState(false);
    const [fourth,setFourth] = useState(false);

    const firstCall =()=>{
        setSecond(false);
        setFourth(false);
        setFirst(true);
        setThird(false);
    }
    const secondCall = ()=>{
        setSecond(true);
        setFourth(false);
        setFirst(false);
        setThird(false);
    }
    const thirdCall = ()=>{
        setSecond(false);
        setFourth(false);
        setFirst(false);
        setThird(true);
    }
    const fourthCall = ()=>{
        setSecond(false);
        setFourth(true);
        setFirst(false);
        setThird(false);
    }



    return (
        <Container fluid="true" className="registration">

            <form className="formBorder" action="">
                <h4 className="boldTitle mb-5">Registration Form</h4>

                {
                    !second && first && !third && !fourth?<FirstContestant secondCall={secondCall}/>:""
                }
                {
                    second && !first && !third && !fourth?<SecondContestant firstCall={firstCall} thirdCall={thirdCall}/>:""
                }
                {
                    third && !first && !second && !fourth?<ThirdContestant secondCall={secondCall} fourthCall={fourthCall}/>:""
                }
                {
                    !third && !first && !second && fourth?<TeacherData thirdCall={thirdCall}/>:""
                }

            </form>
        </Container>
    );
}

export default RegiForm;