import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import TopBanner from "../Components/TopBanner";
import Logo from "../Components/Logo";
import Honor from "../Components/Honor";
import Footer from "../Components/Footer";
import Count from "../Components/Count";
import Support from "../Components/Support";
import Sponsor from "../Components/Sponsor";

function Home(props) {
    return (
        <Fragment>

            <TopBanner/>
            <Count/>
            <Honor/>
            <Support/>
            <Sponsor/>

        </Fragment>
    );
}

export default Home;