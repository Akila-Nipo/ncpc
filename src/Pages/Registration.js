import React, {Fragment, useState} from 'react';
import '../Assets/CSS/Registration.css';
import RegiForm from "../Components/RegiForm";

function Registration(props) {
    const [data,setData] = useState({
        teamName:"",
        instituteName:"",
        firstUserName1:"",
        firstUserName2:"",
        firstUserEmail:"",
        firstUserPhone:"",
        firstUserGender:"",
        firstUserDob:"",
        firstUserNid:"",
        firstUserTShirt:"",
        firstUserId:null,
        firstUserPhoto:null,

        secondUserName1:"",
        secondUserName2:"",
        secondUserEmail:"",
        secondUserPhone:"",
        secondUserGender:"",
        secondUserDob:"",
        secondUserNid:"",
        secondUserTShirt:"",
        secondUserId:null,
        secondUserPhoto:null,

        thirdUserName1:"",
        thirdUserName2:"",
        thirdUserEmail:"",
        thirdUserPhone:"",
        thirdUserGender:"",
        thirdUserDob:"",
        thirdUserNid:"",
        thirdUserTShirt:"",
        thirdUserId:null,
        thirdUserPhoto:null,

        teacherName1:"",
        teacherName2:"",
        teacherDesignation:"",
        teacherEmail:"",
        teacherPhone:"",
        teacherGender:"",
        teacherNid:"",
        teacherTShirt:"",
        teacherId:null,
        teacherPhoto:null
    });

    return (
        <Fragment>
            <RegiForm data={data} setData={setData} />
        </Fragment>
    );
}

export default Registration;
