import "./App.css";
// import './vendors/bootstrap/css/bootstrap.min.css';
import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/bootstrap/bootstrap.min.css";
// import "./vendors/fontawesome/css/all.min.css";
import "./vendors/fontawesome/css/font-awesome.min.css";
import HelloWorld from "./components//HelloWorld";
import Labs from "./components/Labs/index.js";
import Tuiter from "./components/Tuiter/index.js";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/hello" exact={true}>
          <HelloWorld />
        </Route>
        <Route path="/labs" path={["/", "/labs"]} exact={true}>
          <Labs />
        </Route>
        <Route path="/tuiter" exact={true}>
          <Tuiter />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
