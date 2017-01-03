import reducer from 'reducers';
import { Store, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {ApplicationState} from 'reducers';

declare var window;

// Export the configure method instead of the store
// to be able to create any amount of stores for testing
export default function configureStore(): Store<any> {

    // optionally provide persisted state to override the initial 
    // state from reducers
    const persistedState: ApplicationState = {
        recipes: [
            { id: 99, title: 'Persisted recipe', description: 'can be overridden by calling a fetch action on startup'},
        ]
    };

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

    return store;
}
