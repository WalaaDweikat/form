import "./App.css";
import SignUpBefore from "./pages/SignUpBefore/index.js";
import SignUpAfter from "./pages/SignUpAfter/index.js";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SignUpAfter />
        </Route>
        <Route path="/SignUpBefore">
          <SignUpBefore />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
