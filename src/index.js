import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Hello from React!';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
