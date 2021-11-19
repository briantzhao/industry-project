import { Component } from "react";
import Footer from "../../components/Footer/Footer";
import OutroHero from "../../components/OutroHero/OutroHero";
import OutroMain from "../../components/OutroMain/OutroMain";

function OutroPage(){
    return(
        <>
        <OutroHero />
        <OutroMain />
        <Footer />
        </>
    )
}

export default OutroPage;