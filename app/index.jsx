import { Router, Route, browserHistory } from 'react-router'
import { render } from 'react-dom'

// components
import App from './components/App'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App} />
    </Router>
), document.getElementById('app'))
