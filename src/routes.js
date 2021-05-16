import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Menu from "./menu";
import { MealNumberProvider } from "./context";
export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MealNumberProvider>
            <App />
          </MealNumberProvider>
        </Route>
        <Route exact path="/menu">
          <MealNumberProvider>
            <Menu />
          </MealNumberProvider>
        </Route>
      </Switch>
    </Router>
  );
};
