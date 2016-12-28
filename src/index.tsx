/* vendor */
import * as React from 'react'
import { render } from 'react-dom'
import { Store } from 'redux'
import configureStore from './store/configureStore'

/* components */
import { Root } from './components/Root'

const store: Store<any> = configureStore()

render((
    <Root store={store} />
), document.body)
