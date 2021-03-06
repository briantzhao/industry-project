import { Component } from "react";
import product from "../../assets/images/Product card.svg";
import "./OutroHero.scss";

function OutroHero() {
  return (
    <header>
      <section className="hero">
        <div className="hero__box">
          <h1>Looks like you're ready to go</h1>
          <p className="hero__desc">
            That was fun right? Feel free to dive a little deeper on crypto, or
            get started right away.
          </p>
          <div className="hero__box--bot">
            <button className="hero__btn--clear">Learn more</button>
            <a href="https://robinhood.com/signup">
              <button className="intro__hero-btn">Start investing</button>
            </a>
          </div>
        </div>
        <div className="hero__box--right">
          <img className="hero__img" src={product} alt="product cards" />
        </div>
      </section>
    </header>
  );
}

export default OutroHero;
