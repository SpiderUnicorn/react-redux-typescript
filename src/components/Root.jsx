import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './AppContainer'
import Material from './material-ui/MyAwesomeReactComponent'

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
)

Root.propTypes = {
    store: React.PropTypes.object.isRequired
}

export default Root

