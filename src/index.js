import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/configureStore';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    {/* <Router> */}
      <App />
    {/* </Router> */}
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
