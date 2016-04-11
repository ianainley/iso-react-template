import express from 'express';
import renderMiddleware from './middleware/iso-renderer'

const app = express();

app.use('*', renderMiddleware);

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});

export default app;
