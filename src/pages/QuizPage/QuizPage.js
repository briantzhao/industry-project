import { Component } from "react";
import questionList from "../../data/questions.json";
import "./QuizPage.scss";
import Modal from "react-modal";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import bank from "../../assets/bank.svg";
import bitcoin from "../../assets/bitcoin.svg";
import cookiejar from "../../assets/cookiejar.svg";
import dogecoin from "../../assets/dogecoin.svg";
import dogecoin2 from "../../assets/dogecoin2.svg";
import email from "../../assets/email.svg";
import ethereum from "../../assets/ethereum.svg";
import ethereum2 from "../../assets/ethereum2.svg";
import polkadot from "../../assets/polkadot.svg";
import shibainu from "../../assets/shibainu.svg";
import tether from "../../assets/tether.svg";
import wallet from "../../assets/wallet.svg";
import pizza from "../../assets/pizza.svg";
import car from "../../assets/car.svg";
import check from "../../assets/check icon.svg";
import excl from "../../assets/excl icon.svg";
import roses from "../../assets/roses.svg";
import vacation from "../../assets/vacation.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Logo from "../../assets/feather-logo.svg";

export default class QuizPage extends Component {
  state = {
    modalOpen: false,
    questions: questionList,
    currentQ: questionList[0],
    current: 0,
    finished: false,
    correct: false,
  };

  clickAnswer = (answer) => {
    if (answer == this.state.currentQ.correct) {
      //   this.setState({ points: this.state.points + 10 });
      // correct message (modal?)
      this.setState({ correct: true }, () => {
        this.setState({ modalOpen: true }, () => {
          if (this.state.current === this.state.questions.length - 1) {
            this.setState({ finished: true });
            return;
          }
          //   this.setState({ current: this.state.current + 1 }, () => {
          //     this.setState({
          //       currentQ: this.state.questions[this.state.current],
          //     });
          //     return;
          //   });
        });
      });
    } else {
      this.setState({ correct: false }, () => {
        this.setState({ modalOpen: true });
      });
      // incorrect message and behavior
    }
  };

  nextQuestion = () => {
    if (this.state.correct) {
      if (this.state.finished) {
        return;
      }
      this.setState({ current: this.state.current + 1 }, () => {
        this.setState({
          currentQ: this.state.questions[this.state.current],
        });
      });
    }
  };
  //   pic1 = () => {
  //     switch (this.state.current) {
  //       case 0:
  //         return car;
  //       case 1:
  //         return bank;
  //       case 2:
  //         return bitcoin;
  //       default:
  //         return car;
  //     }
  //   };

  //   pic2 = () => {
  //     switch (this.state.current) {
  //       case 0:
  //         return pizza;
  //       case 1:
  //         return bank;
  //       case 2:
  //         return bitcoin;
  //     }
  //   };

  //   pic3 = () => {
  //     switch (this.state.current) {
  //       case 0:
  //         return roses;
  //       case 1:
  //         return email;
  //       case 2:
  //         return tether;
  //     }
  //   };

  //   pic4 = () => {
  //     switch (this.state.current) {
  //       case 0:
  //         return vacation;
  //       case 1:
  //         return wallet;
  //       case 2:
  //         return dogecoin;
  //     }
  //   };

  tryAgain = () => {
    this.setState({ currentQ: this.state.questions[0] });
  };

  handleClick = (forward) => {
    if (forward) {
      if (this.state.current === this.state.questions.length - 1) {
        this.setState({ finished: true });
        return;
      }
      this.setState({ current: this.state.current + 1 }, () => {
        this.setState({ currentQ: this.state.questions[this.state.current] });
      });
      return;
    }
    this.setState({ finished: false });
    this.setState({ current: this.state.current - 1 }, () => {
      this.setState({ currentQ: this.state.questions[this.state.current] });
    });
  };

  render() {
    console.log(this.state.currentQ);
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
        <div className="quiz">
          <div className="progress__section">
            <p className="progress__title">
              Question {this.state.current + 1} of {this.state.questions.length}
            </p>
            <div className="progress-bar">
              <ProgressBar
                bgcolor="#05C507"
                completed={
                  ((this.state.current + 1) / this.state.questions.length) * 100
                }
              />
            </div>
          </div>
          {/* <h1 className="title">Do You Know Crypto?</h1> */}
          <article className="question-box">
            <h2 className="title">{this.state.currentQ.question}</h2>
            {/* {this.state.finished && (
            <section className="question-box__results">
              <h1>Finish!</h1>
              <button>Learn More About Crypto!</button>
              <button onClick={this.tryAgain}>Try Again</button>
            </section>
          )} */}
            <Modal
              className={
                this.state.correct
                  ? "modal modal--correct"
                  : "modal modal--incorrect"
              }
              isOpen={this.state.modalOpen}
              ariaHideApp={false}
            >
              {this.state.correct ? (
                <div className="modal__main">
                  <h2 className="modal__title">
                    <img className="modal__icon" src={check} /> Correct!
                  </h2>
                  <div className="modal__body">
                    <div>
                      <p className="modal__fact--true">
                        {this.state.currentQ.factRight}
                      </p>
                      <p className="modal__fact--true modal__fact--true--2">
                        {this.state.currentQ.factRight2}
                      </p>
                    </div>
                    {this.state.current === 0 && (
                      <img className="answer-box__single__pic" src={pizza} />
                    )}
                    {this.state.current === 1 && (
                      <img className="answer-box__single__pic" src={wallet} />
                    )}
                    {this.state.current === 2 && (
                      <img className="answer-box__single__pic" src={bitcoin} />
                    )}
                  </div>
                </div>
              ) : (
                <div className="modal__main">
                  <h2 className="modal__title">
                    <img className="modal__icon" src={excl} /> Almost...
                  </h2>
                  <p className="modal__fact">{this.state.currentQ.factWrong}</p>
                </div>
              )}
              <button
                className="modal__button"
                onClick={() => {
                  this.setState({ modalOpen: false }, () => {
                    this.nextQuestion();
                  });
                }}
              >
                {this.state.correct ? "Next Question" : "Try Again"}
              </button>
            </Modal>
          </article>
          <article className="answer-box">
            <div className="answer-box__row">
              <section
                className="answer-box__single"
                onClick={
                  this.state.finished
                    ? ""
                    : () => {
                        this.clickAnswer(1);
                      }
                }
              >
                <p className="answer-box__single__title">
                  {this.state.currentQ.answer1}
                </p>
                {this.state.current === 0 && (
                  <img className="answer-box__single__pic" src={car} />
                )}
                {this.state.current === 1 && (
                  <img className="answer-box__single__pic" src={bank} />
                )}
                {this.state.current === 2 && (
                  <img className="answer-box__single__pic" src={bitcoin} />
                )}
              </section>
              <section
                className="answer-box__single"
                onClick={
                  this.state.finished
                    ? ""
                    : () => {
                        this.clickAnswer(2);
                      }
                }
              >
                <p className="answer-box__single__title">
                  {this.state.currentQ.answer2}
                </p>
                {this.state.current === 0 && (
                  <img className="answer-box__single__pic" src={pizza} />
                )}
                {this.state.current === 1 && (
                  <img className="answer-box__single__pic" src={cookiejar} />
                )}
                {this.state.current === 2 && (
                  <img className="answer-box__single__pic" src={ethereum} />
                )}
              </section>
            </div>
            <div className="answer-box__row">
              <section
                className="answer-box__single"
                onClick={
                  this.state.finished
                    ? ""
                    : () => {
                        this.clickAnswer(3);
                      }
                }
              >
                <p className="answer-box__single__title">
                  {this.state.currentQ.answer3}
                </p>
                {this.state.current === 0 && (
                  <img className="answer-box__single__pic" src={roses} />
                )}
                {this.state.current === 1 && (
                  <img className="answer-box__single__pic" src={email} />
                )}
                {this.state.current === 2 && (
                  <img className="answer-box__single__pic" src={tether} />
                )}
              </section>
              <section
                className="answer-box__single"
                onClick={
                  this.state.finished
                    ? ""
                    : () => {
                        this.clickAnswer(4);
                      }
                }
              >
                <p className="answer-box__single__title">
                  {this.state.currentQ.answer4}
                </p>
                {this.state.current === 0 && (
                  <img className="answer-box__single__pic" src={vacation} />
                )}
                {this.state.current === 1 && (
                  <img className="answer-box__single__pic" src={wallet} />
                )}
                {this.state.current === 2 && (
                  <img className="answer-box__single__pic" src={dogecoin} />
                )}
              </section>
            </div>
          </article>
          <article className="buttons">
            {this.state.current !== 0 && (
              <button
                className="buttons__single"
                onClick={() => {
                  this.handleClick(false);
                }}
              >
                {"<"} Back
              </button>
            )}
            {this.state.finished ? (
              <Link to="/outro">
                <button className="buttons__single">Finish the Quiz</button>
              </Link>
            ) : (
              <button
                className="buttons__single"
                onClick={() => {
                  this.handleClick(true);
                }}
              >
                Skip {">"}
              </button>
            )}
          </article>
        </div>
        <Footer></Footer>
      </>
    );
  }
}
