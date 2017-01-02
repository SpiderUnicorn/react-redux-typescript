import * as React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from 'components/App';
import AboutPage from 'components/AboutPage';
import RecipesPage from 'components/RecipesPage';

export default (
   <Router history={browserHistory}>
      <Route path="/" component={App}>
         <IndexRoute component={RecipesPage} />
         <Route path="/recipes" component={RecipesPage} />
         <Route path="/about" component={AboutPage} />
      </Route>
   </Router>
);