import "./HomePage.scss";
import ReactCardFlip from "react-card-flip";
import React, { Component } from "react";
import Logo from "../../assets/feather-logo.svg";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  state = {
    isFlipped1: false,
    isFlipped2: false,
    isFlipped3: false,
  };

  handleClick1 = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      isFlipped1: !prevState.isFlipped1,
    }));
  };

  handleClick2 = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      isFlipped2: !prevState.isFlipped2,
    }));
  };

  handleClick3 = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      isFlipped3: !prevState.isFlipped3,
    }));
  };

  render() {
    return (
      <div>
        {/* <!-- Navigation Bar --> */}
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

        {/* Hero */}
        <section className="intro__hero">
          <h2 className="top-header">Crypto 101</h2>
          <hr />
          <br />
          <br />
          <br />
          <br />
          <h1 className="intro__hero-header">The currency of the future</h1>
          <h3 className="top-header__caption">
            You've heard about it, but how much do you really know about
            cryptocurrency? Test your knowledge and find out if you're ready to
            start investing.
          </h3>

          <br />
          <br />
          <br />
          <Link to="/quiz">
            <button className="intro__hero-btn">Take our crypto quiz</button>
          </Link>
          <img
            src="https://learn.robinhood.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fhero-journey__c58375aab2212723e510a286b42f9567.svg&w=3840&q=75"
            alt="person reading a map on top of a green book"
            className="hero__image"
          />
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />

        <article className="card-section">
          <ReactCardFlip
            isFlipped={this.state.isFlipped1}
            flipDirection="horizontal"
          >
            <div className="card1 card1-a" onClick={this.handleClick1}>
              What is a <br />
              Private Key?
            </div>
            <div className="card2 card2-a" onClick={this.handleClick1}>
              <p className="card__q">
                {" "}
                What is a <br />
                Private Key?
              </p>
              <br /> Similar to a password - a private key is a string of
              letters and numbers - that allows you to access and manage your
              crypto funds.
              <br />
              <br />
              <p className="card__readmore">Read More</p>
            </div>
          </ReactCardFlip>
          <ReactCardFlip
            isFlipped={this.state.isFlipped2}
            flipDirection="horizontal"
          >
            <div className="card1 card1-b" onClick={this.handleClick2}>
              What is a <br />
              Crypto Wallet?
            </div>
            <div className="card2 card2-b" onClick={this.handleClick2}>
              <p className="card__q">
                What is a <br />
                Crypto Wallet?
              </p>
              <br />
              Crypto wallets keep your private keys safe and accessible,
              allowing you to send and receive cryptocurrencies.
              <br />
              <br />
              <p className="card__readmore">Read More</p>
            </div>
          </ReactCardFlip>
          <ReactCardFlip
            isFlipped={this.state.isFlipped3}
            flipDirection="horizontal"
          >
            <div className="card1 card1-c" onClick={this.handleClick3}>
              What is <br />
              Crypto Mining?
            </div>
            <div className="card2 card2-c" onClick={this.handleClick3}>
              <p className="card__q">What is Crypto Mining?</p>
              <br /> Crypto mining refers to the process of gaining
              cryptocurrencies as a reward for work that you complete solving
              equations with the use of computers. <br />
              <br />
              <p className="card__readmore">Read More</p>
            </div>
          </ReactCardFlip>
        </article>

        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
