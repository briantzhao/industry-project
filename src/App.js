import "./App.scss";
import QuizPage from "./pages/QuizPage/QuizPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/quiz" exact component={QuizPage} />
          <Route path="/footer" exact component={Footer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
