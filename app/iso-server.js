import Iso from 'iso';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes.js';
import Helmet from 'react-helmet';

function template ({ title, meta, link, body }) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <link rel="stylesheet" href="/bundles/styles.css" />
        ${meta}
        ${link}
      </head>
      <body>
        ${body}
        <script type="text/javascript" charset="utf-8" src="/bundles/app.js"></script>
      </body>
    </html>
  `;
}

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
      const body = Iso.render(content, state);
      const head = Helmet.rewind();

      result.html = template({
        body,
        title: head.title.toString(),
        meta: head.meta.toString(),
        link: head.link.toString()
      });
    }
  });

  return result;
}

export default render;
