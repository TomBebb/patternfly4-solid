
/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';
import '@patternfly/patternfly/patternfly.css'
import './index.css'

render(() => <App />, document.getElementById('root') as HTMLElement);
