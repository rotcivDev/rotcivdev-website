import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage';
import Profile from './pages/profile';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/profile' component={Profile}/>
    </Switch>
  );
}

export default App;
