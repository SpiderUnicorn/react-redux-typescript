import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './AppContainer'

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
)

export default Root

