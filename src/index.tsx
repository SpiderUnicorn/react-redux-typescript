// Vendor imports
import React from 'react';
import { render } from 'react-dom';
import { Store } from 'redux';
import configureStore from './store/configureStore';

// Components
import { Root } from './components/Root';

// Styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootswatch/yeti/bootstrap.min.css';

// seed action
import { loadRecipes } from 'actions';

// Set up a redux store
const store = configureStore();
store.dispatch<any>(loadRecipes());

const appElement = document.getElementById('app');

render((
    <Root store={store} />
), appElement);
