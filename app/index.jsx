import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configure from './store/'

import App from './components/AppContainer'

// optinally provide persisted state
// to override the intitial state from reducers
const persistedState = {
    count: 0
}

let store = configure(persistedState)

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
), document.getElementById('app'))
