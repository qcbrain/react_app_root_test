import React from "react";
import {HashRouter, Route} from "react-router-dom";
import HMenu from "./components/HMenu";
import More from "./routes/More";
import Movie from "./routes/Movie";

function App() {
  return (
  <HashRouter>
    <HMenu />
    <Route path="/movie" component={Movie} />
    <Route path="/more/:id" component={More} />
    <div id="i_bot">This page is cloned into Nomad Coder's.</div>
  </HashRouter>
  );
}

export default App;
