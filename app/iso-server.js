import path from 'path';
import fs from 'fs';
import Iso from 'iso';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes.js';
import Helmet from 'react-helmet';

const html = fs.readFileSync(path.resolve(__dirname, '..', 'public', './index.html')).toString();

function render (state, req, res) {
  let result = {
    html: '',
    error: null,
    redirect: null
  };

  const location = req.url;

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (error) {
      result.error = error;
    } else if (redirectLocation) {
      result.redirect = redirectLocation;
    } else if (renderProps) {
      const content = ReactDOMServer.renderToString(<RouterContext {...renderProps} />);
      const statefulContent = Iso.render(content, state);
      const head = Helmet.rewind();

      result.html = html
        .replace('BODY', statefulContent)
        .replace('TITLE', head.title.toString())
        .replace('META', head.meta.toString())
        .replace('LINK', head.link.toString());
    }
  });  

  return result;
}

export default render;
