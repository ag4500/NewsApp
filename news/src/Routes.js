import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import News from "./components/News";
import Description from "./components/Description";
import Bookmark from "./components/Bookmark";

function Routes() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/bookmark"
                style={{ textDecoration: "none", color: "black" }}
              >
                BookMark
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <Switch>
        <Route exact path="/" component={News} />
        <Route exact path="/desc/:index/:publishedAt" component={Description} />
        <Route exact path="/bookmark" component={Bookmark} />
      </Switch>
    </Router>
  );
}
export default Routes;
