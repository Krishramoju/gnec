import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
