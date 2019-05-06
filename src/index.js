import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apostoloskalovelonis from './apostoloskalovelonis';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<Apostoloskalovelonis />, document.getElementById('root'));

serviceWorker.unregister();
