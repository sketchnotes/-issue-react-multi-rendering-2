import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Welcome from './pages/welcome';
import { CurrentUserProvider } from './components/currentUser';
import CurrentUserChecker from './components/CurrentUserChecker';

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <Switch>
            <Route path="/" component={Welcome} exact />
          </Switch>
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
