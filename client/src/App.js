import "./App.css";
// import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import Homepage from "./pages/Homepage";
import CartPage from "./pages/Cart";
import Signup  from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar />
      <Switch>
        <Route path="/cart" component={CartPage} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={Policy} exact />
        <Route path="/about" component={About} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
