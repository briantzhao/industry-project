import Footer from "../components/Footer/Footer";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function HomePage(){
    return(
        <>
        <Router>
            <Switch>
                <Route path="/footer" component={Footer}></Route>
            </Switch>
        </Router>
        </>
    )
}

export default HomePage