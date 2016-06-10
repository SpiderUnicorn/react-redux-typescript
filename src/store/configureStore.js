import reducer from '../reducers/'
import { createStore } from 'redux'

// Export the configure method instead of the store
// to be able to create any amount of stores for testing
export default function configureStore() {
    // optinally provide persisted state
    // to override the intitial state from reducers
    const persistedState = {
        count: 0
    }

    const store = createStore(reducer, persistedState,
                              window.devToolsExtension && window.devToolsExtension()
                             )
    return store
}
