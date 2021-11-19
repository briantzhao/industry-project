import "./App.scss";
import QuizPage from "./pages/QuizPage/QuizPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import OutroPage from "./pages/OutroPage/OutroPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/quiz" exact component={QuizPage} />
          <Route path="/outro" exact component={OutroPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
