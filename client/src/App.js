import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "./components/view/Header";
import RetrieveAds from "./components/RealEstate/RetrieveAds";
import PostAd from "./components/RealEstate/PostAd";
import UpdateAd from "./components/RealEstate/UpdateAd";
import Home from "./components/RealEstate/Home";
import Sell from "./components/RealEstate/Sell";
import Footer from "./components/view/Footer";

function App() {
  return (
    <div>
      <Header title={"Zillow"} />
      <Router>
        <Switch>
          {/* <Route exact path="/getads">
            <RetrieveAds />
          </Route> */}
          <Route exact path="/getads" component={RetrieveAds} />
          <Route exact path="/postad">
            <PostAd />
          </Route>
          <Route exact path="/updatead">
            <UpdateAd />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sell">
            <Sell />
          </Route>

          <Redirect to="/realestate/404" />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
