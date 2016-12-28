import * as React from 'react'
import { Provider } from 'react-redux'

import { routes } from 'routes'

export const Root = ({store}) => (
    <Provider store={store}>
        {routes}
    </Provider>
)
