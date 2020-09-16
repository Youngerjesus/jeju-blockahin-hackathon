import React from 'react';
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./routes/Home";


function App() {
  return (
      <BrowserRouter>
        <GlobalStyles />
        <div className="App">
          <Switch>
            <Route path-="/" exact component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
