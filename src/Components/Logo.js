import React from 'react';
import {Container} from "react-bootstrap";
import icpc from '../Assets/Images/icpc_logo_small.png';
import ju from '../Assets/Images/juLogo.jpg';
import bcc from '../Assets/Images/bcc_logo.png';
import db from '../Assets/Images/digital-bangladesh.png';
import ict from '../Assets/Images/ICT_Division.png';

function Logo(props) {
    return (
        <Container fluid="true" className="logoContainer p-2">
           <div className="logoLeftDiv">
               <img src={icpc} alt=""/>
               <img src={ju} alt=""/>
           </div>
            <div className="logoRightDiv">
               <img src={bcc} alt=""/>
               <img src={db} alt=""/>
               <img src={ict} alt=""/>
           </div>
        </Container>
    );
}

export default Logo;
