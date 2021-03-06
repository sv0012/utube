import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import './_base.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'react-lazy-load-image-component/src/effects/blur.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <App />
      </Provider>
    
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

