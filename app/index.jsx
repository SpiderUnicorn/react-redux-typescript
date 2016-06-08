import React from 'react'
import { render } from 'react-dom'
import configure from './store/configureStore'

import App from './components/AppContainer'

const store = configure()

render((
    <Root store={store} />
), document.getElementById('app'))
