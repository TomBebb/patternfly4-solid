
/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';
import '@patternfly/patternfly/patternfly-base.css'

render(() => <App />, document.getElementById('root') as HTMLElement);
