import React from 'react';
import ReactDOM from 'react-dom';

import { Box, Grommet } from 'grommet';
import { Add } from 'grommet-icons';

ReactDOM.render(<Grommet><Add /><Box>hello!!!</Box></Grommet>, document.getElementById('root'));

document.body.classList.remove('loading');
