import { Component } from "react";
import questionList from "../../data/questions.json";
import "./QuizPage.scss";
import Modal from "react-modal";

// const ProgressBar = (props) => {
//     const {bgcolor, completed}
// }

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

  render() {
    return (
      <div className="quiz">
        {/* <h1 className="title">Do You Know Crypto?</h1> */}
        <article className="question-box">
          <h2>{this.state.currentQ.question}</h2>
          {this.state.finished && (
            <section className="question-box__results">
              <h1>Finish!</h1>
              <button>Learn More About Crypto!</button>
              <button onClick={this.tryAgain}>Try Again</button>
            </section>
          )}
          <Modal isOpen={this.state.modalOpen} ariaHideApp={false}>
            {this.state.correct ? (
              <>
                <p>Correct!</p>
                <p>{this.state.currentQ.fact}</p>
              </>
            ) : (
              <p>Sorry!</p>
            )}
            <button
              onClick={() => {
                this.setState({ modalOpen: false });
              }}
            >
              {this.state.correct ? "Next" : "Try Again"}
            </button>
          </Modal>
        </article>
        <article className="answer-box">
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
            <p>{this.state.currentQ.answer1}</p>
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
            <p>{this.state.currentQ.answer2}</p>
          </section>
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
            <p>{this.state.currentQ.answer3}</p>
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
            <p>{this.state.currentQ.answer4}</p>
          </section>
        </article>
      </div>
    );
  }
}
