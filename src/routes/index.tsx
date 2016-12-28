import * as React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import App from 'components/AppContainer'

export const routes = () => (
   <Router history={browserHistory}>
      <Route path="/" component={App} />
   </Router>
)