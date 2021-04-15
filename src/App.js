import React, { useState } from "react";
import { NavBar } from "./components/navbar/index"
import About from "./components/About";
import EnergyMix from "./components/EnergyMix"
import Contact from "./components/Contact";
import Register from "./components/Register";
import Footer from "./components/Footer"

import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

function App() {

  const [userDetails, setUserDetails] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={EnergyMix} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/register"
          render={() => (
            <Register handleChange={handleChange} userDetails={userDetails} setUserDetails={setUserDetails}/>
          )}
          />
      </Switch>
    </Router>
    <Footer/>
    </>
  );
}

export default App;