/* globals */
import './index.css'

/* vendor */
import React from 'react'
import { render } from 'react-dom'
import configure from './store/configureStore'

/* components */
import Root from './components/Root'

const store = configure()

render((
    <Root store={store} />
), document.getElementById('app'))
