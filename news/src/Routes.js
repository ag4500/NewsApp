import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import News from "./components/News";
import Description from './components/Description'
function Routes() {
  return (
    <Router>
      <div className="App">
        
      </div>
      <Switch>
        <Route exact path="/" component={News} />
        <Route  exact path="/desc/:index/:publishedAt" component={Description} />
      </Switch>
    </Router>
  );
}
export default Routes;
