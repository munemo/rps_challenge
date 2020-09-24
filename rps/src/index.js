import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "semantic-ui-css/semantic.min.css"
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
