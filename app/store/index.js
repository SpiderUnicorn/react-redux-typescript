import reducer from '../reducers/'
import { createStore } from 'redux'

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState,
                              window.devToolsExtension && window.devToolsExtension()
                             );
    return store;
}
