import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "./components/view/Header";
import Footer from "./components/view/Footer";
import Home from "./components/RealEstate/Home";
import Sell from "./components/RealEstate/Sell";

function App() {
  return (
    <div>
      <Header title={"Zillow"} />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sell">
            <Sell />
          </Route>
          <Redirect to="/realestate/404" />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
