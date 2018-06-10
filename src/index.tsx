import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './assets/index.css';
import registerServiceWorker from './config';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
