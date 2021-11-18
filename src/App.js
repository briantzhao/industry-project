import { Component } from "react";
import "./App.scss";
import questionList from "./data/questions.json";

class App extends Component {
  state = {
    points: 0,
    questions: questionList,
    currentQ: questionList[0],
    current: 0,
    finished: false,
  };
  clickAnswer = (answer) => {
    if (answer == this.state.currentQ.correct) {
      this.setState({ points: this.state.points + 10 });
      // correct message (modal?)
    } else {
      // incorrect message and behavior
    }
    console.log(this.state.current);
    if (this.state.current === this.state.questions.length - 1) {
      this.setState({ finished: true });
      return;
    }
    this.setState({ current: this.state.current + 1 }, () => {
      this.setState({ currentQ: this.state.questions[this.state.current] });
    });
  };
  render() {
    return (
      <div className="App">
        <h1 className="title">Do You Know Crypto?</h1>
        <article className="question-box">
          <h2>{this.state.currentQ.question}</h2>
          {this.state.finished && (
            <section className="question-box__results">
              <h1>Congrats! You scored {this.state.points} points!</h1>
            </section>
          )}
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

export default App;
