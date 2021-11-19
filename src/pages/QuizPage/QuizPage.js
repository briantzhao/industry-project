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
        this.setState({ modalOpen: true });
        if (this.state.current === this.state.questions.length - 1) {
          this.setState({ finished: true });
          return;
        }
        this.setState({ current: this.state.current + 1 }, () => {
          this.setState({ currentQ: this.state.questions[this.state.current] });
          return;
        });
      });
    } else {
      this.setState({ correct: false }, () => {
        this.setState({ modalOpen: true });
      });
      // incorrect message and behavior
    }
  };

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
    return (
      <div className="quiz">
        <div className="progress__section">
          <p>
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
          <h2>{this.state.currentQ.question}</h2>
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
              <>
                <h2 className="modal__title">Correct!</h2>
                <div className="modal__body">
                  <p className="modal__fact">{this.state.currentQ.factRight}</p>
                  <img className="modal__vid"></img>
                </div>
              </>
            ) : (
              <>
                <h2 className="modal__title">Almost...</h2>
                <p className="modal__fact--wrong">
                  {this.state.currentQ.factWrong}
                </p>
              </>
            )}
            <button
              onClick={() => {
                this.setState({ modalOpen: false });
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
              <img
                className="answer-box__single__pic"
                src={this.state.currentQ.picture1}
              />
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
              <img
                className="answer-box__single__pic"
                src={this.state.currentQ.picture2}
              />
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
              <img
                className="answer-box__single__pic"
                src={this.state.currentQ.picture3}
              />
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
              <img
                className="answer-box__single__pic"
                src={this.state.currentQ.picture4}
              />
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
            <button className="buttons__single">Finish the Quiz</button>
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
    );
  }
}
