/* vendor */
import * as React from 'react'
import { render } from 'react-dom'
import { Store } from 'redux'
import configureStore from './store/configureStore'

/* components */
import { Root } from './components/Root'

const store = configureStore()

const appElement = document.getElementById('app')

render((<Root store={store} />), appElement)
