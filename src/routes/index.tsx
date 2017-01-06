import * as React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import {App} from 'components/App';
import {AboutPage} from 'components/AboutPage';
import {RecipesPage} from 'components/RecipesPage';

/** The routing configuration for the application using react-router */
const RouteConfiguration = (
   <Router history={browserHistory}>
      <Route path="/" component={App}>
         <IndexRoute component={RecipesPage} />
         <Route path="/recipes" component={RecipesPage} />
         <Route path="/about" component={AboutPage} />
      </Route>
   </Router>
);

export default RouteConfiguration;