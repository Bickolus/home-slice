import "./App.css";
// import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar />
      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={Policy} exact />
        <Route path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
