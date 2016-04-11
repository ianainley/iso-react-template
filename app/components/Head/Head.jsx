import React from 'react';
import Helmet from 'react-helmet';

function Head() {
  return (
    <Helmet
      title="Welcome"
      titleTemplate="%s - Title Template"
      defaultTitle="Welcome"
      meta={[
        {"name": "description", "content": "Site description"}
      ]}
    />
  );
}

export default Head;
