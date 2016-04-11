import babelPolyfill from 'babel-polyfill';
import Iso from 'iso';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes.js'

Iso.bootstrap((state, node) => {  
  ReactDOM.render(<Router history={browserHistory} children={routes} />, node);
});
