import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>hello!!!</div>, document.getElementById('root'));
registerServiceWorker();

document.body.classList.remove('loading');
