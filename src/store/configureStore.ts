import reducer from 'reducers';
import { Store, createStore, applyMiddleware, compose } from 'redux';
import {ApplicationState} from 'reducers';

declare var window;

// Export the configure method instead of the store
// to be able to create any amount of stores for testing
export default function configureStore(): Store<ApplicationState> {

    // optionally provide persisted state to override the initial 
    // state from reducers
    const persistedState: ApplicationState = {
        recipes: [
            { id: 1, title: 'Pasta rosso', description: 'Pasta with ketchup'},
            { id: 2, title: 'Leftovers', description: 'Whatever you can find in the fridge'}
        ]
    };

    const store = createStore(reducer, persistedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return store;
}
