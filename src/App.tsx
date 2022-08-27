import type { Component } from 'solid-js';

import Title from './Title';

const App: Component = () => {
  return (
    <div >
        <Title headingLevel='h1'>
          Hello, world!
        </Title>
        <Title headingLevel='h2'>
          H2
        </Title>
    </div>
  );
};

export default App;
