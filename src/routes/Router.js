import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/Homepage/Homepage";
import Profile from "../pages/Profile/Profile";

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
