## Another express and react isomorphic app template

### Why?
After working with React/iso/flux apps for a while, this template has become my go-to for getting started.
Let's face it. There's a boat load of boilerplate work that goes into setting up one of these apps.

### Features
- Webpack configuration
- Iso setup on server and client
- Babel setup for server specific code
- Router setup

### What's left out
There's no database, server middleware, or flux implementation included.
It should be relatively simple to integrate any of these needs, and I'd like to
keep this template light and somewhat unopinionated.

### Getting started
1. Copy repo
2. Run `npm install`
3. Run `npm run start:dev`

### Building
1. For dev (nodemon, watch mode, source maps), run `npm run build:dev` or `npm run start:dev` to build then start server.
2. For prod (compiled server code, optimized bundles), run `npm run build:prod` or `npm run start:prod` to build then start server.

### Linting
Run `npm run lint`

### Testing
1. TODO: setup tests with karma, mocha, and JSDOM

### Styling
PostCSS autoprefixing and precss (scss-like features) are included in the
webpack config. Simply add or remove plugins as needed.

Styles are modular and scoped to the component they're imported in,
then compiled to a single stylesheet using ExtractTextWebpackPlugin.

Follow the example in `app/components/AppRoot.jsx` for implementation details.
