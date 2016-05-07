import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterReducer from './reducers/'

import App from './components/AppContainer'

let store = createStore(counterReducer)

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
), document.getElementById('app'))
