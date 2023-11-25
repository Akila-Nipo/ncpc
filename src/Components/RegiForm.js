import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import FirstContestant from "./FirstContestant";
import SecondContestant from "./SecondContestant";
import ThirdContestant from "./ThirdContestant";
import TeacherData from "./TeacherData";
import axios from "axios";

function RegiForm({data, setData}) {

    const [first,setFirst] = useState(true);
    const [second,setSecond] = useState(false);
    const [third,setThird] = useState(false);
    const [fourth,setFourth] = useState(false);


    const inputChange = (e)=>{
        if(e.target.type==='file'){
            setData({
                ...data,
                [e.target.name]:e.target.files[0],
            });
        }else{
            setData({
                ...data,
                [e.target.name]:e.target.value,
            });
        }
        console.log(e.target.value);
    };

    const postDataToBackend = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });

        axios.post('http://localhost:8080/addUser', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                // Handle error
                console.error('There was an error!', error);
            });
    };


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
                    !second && first && !third && !fourth?<FirstContestant secondCall={secondCall} inputChange={inputChange} data={data}/>:""
                }
                {
                    second && !first && !third && !fourth?<SecondContestant firstCall={firstCall} thirdCall={thirdCall} inputChange={inputChange} data={data}/>:""
                }
                {
                    third && !first && !second && !fourth?<ThirdContestant secondCall={secondCall} fourthCall={fourthCall} inputChange={inputChange} />:""
                }
                {
                    !third && !first && !second && fourth?<TeacherData thirdCall={thirdCall} inputChange={inputChange} postDataToBackend={postDataToBackend}/>:""
                }

            </form>
        </Container>
    );
}

export default RegiForm;