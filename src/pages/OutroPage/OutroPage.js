import { Component } from "react";
import Footer from "../../components/Footer/Footer";
import OutroHero from "../../components/OutroHero/OutroHero";
import OutroMain from "../../components/OutroMain/OutroMain";
import Logo from "../../assets/feather-logo.svg";

function OutroPage() {
  return (
    <>
      <nav className="topnav">
        <div className="topnav__header">
          <img src={Logo} alt="logo" />
        </div>
        <div className="topnav__list-container">
          <div>
            <ul className="topnav__list">
              <li className="topnav__list">Products ⌄</li>

              <li className="topnav__list">Learn ⌄</li>
              <li className="topnav__list">Support</li>
              <li className="topnav__list">Who we are ⌄</li>
            </ul>
          </div>
          <div>
            <ul className="topnav__list">
              <li className="topnav__list2">Log In</li>
              <li className="topnav__list2">
                <span className="topnav__btn">Sign Up</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <OutroHero />
      <OutroMain />
      <Footer />
    </>
  );
}

export default OutroPage;
