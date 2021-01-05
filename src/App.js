import "./App.css";
import SignUpBefore from "./pages/SignUpBefore/index.js";
import SignUpAfter from "./pages/SignUpAfter/index.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/SignUpBefore">
          <SignUpBefore />
        </Route>
        <Route path="/">
          <SignUpAfter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
