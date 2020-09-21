import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "semantic-ui-css/semantic.min.css"
import Players from './Players' 
import GenerateWords from './GenerateWords'


ReactDOM.render(
  <React.StrictMode>
    
    <Players />
    <GenerateWords/>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
