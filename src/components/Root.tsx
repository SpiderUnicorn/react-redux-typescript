import * as React from 'react';
import { Provider } from 'react-redux';

import routes from 'routes';

/** Registers the store with a provider at the top level of the application */
export const Root = ({store}) => ((
    <Provider store={store}>
        {routes}
    </Provider>
));
