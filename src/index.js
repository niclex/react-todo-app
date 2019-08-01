import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.querySelector('#react-root'));

serviceWorker.register();
