import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './assets/index.css';
import registerServiceWorker from './config';
import { createStore } from 'redux';
import { enthusiasm } from './reducers';
import { StoreState } from './types';
import HelloComponent from './containers/HelloComponent';
import { Provider } from 'react-redux';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <HelloComponent />
  </Provider>,
  document.getElementById('root') as HTMLElement
  // document.getElementById('root')!
);
registerServiceWorker();
