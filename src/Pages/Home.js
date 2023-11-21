import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import TopBanner from "../Components/TopBanner";
import Logo from "../Components/Logo";
import Honor from "../Components/Honor";
import Footer from "../Components/Footer";

function Home(props) {
    return (
        <Fragment>
            <Logo/>
            <TopMenu/>
            <TopBanner/>
            <Honor/>
            <Footer/>
        </Fragment>
    );
}

export default Home;