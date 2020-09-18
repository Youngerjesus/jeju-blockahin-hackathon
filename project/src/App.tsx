import React from 'react';
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import SignUp from "./routes/SignUp";
import './App.scss'
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
      <BrowserRouter>
        <GlobalStyles />
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/detail" exact component={Detail} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
