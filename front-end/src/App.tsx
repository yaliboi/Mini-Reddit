import NavBar from "./componetns/NavBar";
import Home from "./componetns/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./componetns/Create";
import BlogDetails from "./componetns/BlogDetails";
import NotFound from "./componetns/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
