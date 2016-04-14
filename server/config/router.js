import renderer from '../../public/bundles/server';
const router = require('express').Router();

router.get('*', (req, res) => {
  // Setup app state here.
  const state = {};
  const renderOutput = renderer(JSON.stringify(state), req, res);

  if (renderOutput.error) {
    res.status(500).send('Internal server error');
  } else if (renderOutput.redirect) {
    res.redirect(302, `$${redirect.pathname}${redirect.search}`);
  } else {
    res.set('Content-Type', 'text/html');
    res.status(200).end(renderOutput.html);
  }  
});

export default router;
