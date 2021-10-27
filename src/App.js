import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Component/Login";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/sign-in">
            <Login />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
