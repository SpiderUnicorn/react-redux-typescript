import reducer from '../reducers/'
import { Store, createStore } from 'redux'

declare var window;

// Export the configure method instead of the store
// to be able to create any amount of stores for testing
export default function configureStore(): Store<any> {

    // optionally provide persisted state to override the initial 
    // state from reducers
    const persistedState = {
        count: 0
    }

    const store: Store<any> = createStore(reducer, persistedState,
                              window.devToolsExtension && window.devToolsExtension()
                             )
    return store
}
