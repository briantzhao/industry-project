import { Component } from "react";
import Footer from "../../components/Footer/Footer";
import OutroHero from "../../components/OutroHero/OutroHero";
import OutroMain from "../../components/OutroMain/OutroMain";
import Logo from "../../assets/feather-logo.svg";
import { Link } from "react-router-dom";
import Arrow from "../../assets/downarrow.svg";

function OutroPage() {
  return (
    <>
      <nav className="topnav">
        <Link to="/home">
          <div className="topnav__header">
            <img src={Logo} alt="logo" />
          </div>
        </Link>
        <div className="topnav__list-container">
          <div>
            <ul className="topnav__list">
              <li className="topnav__list">
                Products{" "}
                <img src={Arrow} alt="down arrow" className="topnav__arrow" />
              </li>

              <li className="topnav__list">
                Learn{" "}
                <img src={Arrow} alt="down arrow" className="topnav__arrow" />
              </li>
              <li className="topnav__list">Support</li>
              <li className="topnav__list">
                Who we are{" "}
                <img src={Arrow} alt="down arrow" className="topnav__arrow" />
              </li>
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
