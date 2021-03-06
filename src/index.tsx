import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Root } from './components/Root';

// seed action
import { loadRecipes } from 'actions';

// Set up a redux store
const store = configureStore();
store.dispatch<any>(loadRecipes());

// The element to render react into
const appElement = document.getElementById('app');

render((
    <Root store={store} />
), appElement);
