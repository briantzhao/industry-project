import "./App.scss";
import QuizPage from "./pages/QuizPage/QuizPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/quiz" exact component={QuizPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
