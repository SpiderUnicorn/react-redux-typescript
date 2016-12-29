import reducer from 'reducers'
import { Store, createStore, applyMiddleware, compose } from 'redux'
import {IApplicationState} from 'reducers'

declare var window;

// Export the configure method instead of the store
// to be able to create any amount of stores for testing
export default function configureStore(): Store<IApplicationState> {

    // optionally provide persisted state to override the initial 
    // state from reducers
    const persistedState: IApplicationState = {
        recipes: [
            { title: "Pasta rosso", description: "Pasta with ketchup"},
            { title: "Leftovers", description: "Whatever you can find in the fridge"},
        ]
    }

    const store = createStore(reducer, persistedState, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    
    return store;
}
