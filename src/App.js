import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Members from "./components/Members";

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [userAccount, setUserAccount] = useState();
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  //console.log({ userDetails });
  //console.log({ userAccount });

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route
            exact
            path="/login"
            render={() => (
            <Login handleChange={handleChange} userDetails={userDetails} />
            )}
            />
          <Route
          exact
          path="/register"
          render={() => (
            <Register
              handleChange={handleChange}
              userDetails={userDetails}
              setUserAccount={setUserAccount}
              userAccount={userAccount}
              setRedirect={setRedirect}
              redirect={redirect}
            /> 
          )}
          />
          <Route
          exact
          path="/members"
          render={() =>
            redirect && userAccount ? (
              <Members userAccount={userAccount} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </Switch>
    </Router>
  );
}

export default App;