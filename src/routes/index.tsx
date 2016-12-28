import * as React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import App from 'components/AppContainer'

export default (
   <Router history={browserHistory}>
      <Route path="/" component={App} />
   </Router>
)