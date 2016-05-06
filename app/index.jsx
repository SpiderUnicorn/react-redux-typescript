import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/reducers'

import App from './components/AppContainer'

let store = createStore(reducer)

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
), document.getElementById('app'))
