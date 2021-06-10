import { Switch, Route, Router } from 'react-router-dom';
import HomePage from '../pages/Homepage/Homepage';
import Profile from '../pages/Profile/Profile';
import { createMemoryHistory } from 'history';

export default function AppRouter() {
  const history = createMemoryHistory();
  return<Router history={history}>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/profile' component={Profile}/>
    </Switch>
  </Router>
}
