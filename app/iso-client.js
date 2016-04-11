import babelPolyfill from 'babel-polyfill';
import Iso from 'iso';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes.js'

Iso.bootstrap((state, node) => {
  const history = useRouterHistory(createBrowserHistory);
  ReactDOM.render(<Router history={history} children={routes} />, node);
});
