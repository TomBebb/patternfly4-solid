import type { Component } from 'solid-js';
import TextContent from './TextContent';

import Title from './Title';
import Tooltip from './Tooltip';

const App: Component = () => {
  return (
    <div >

      <Tooltip
        content={
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
          </div>
        }
      />
      <TextContent>
  <h1>Hello world</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius
    lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum
    mattis neque. Sub works as well!
  </p>
  <h2>Second level</h2>
  <p>
    Curabitur accumsan turpis pharetra
    <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel
    cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et
    neque nisl.
  </p>
  <ul>
    <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
    <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
    <li>
      Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
      <ul>
        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
        <li>
          Ut venenatis, nisl scelerisque.
          <ol>
            <li>Donec blandit a lorem id convallis.</li>
            <li>Cras gravida arcu at diam gravida gravida.</li>
            <li>Integer in volutpat libero.</li>
          </ol>
        </li>
      </ul>
    </li>
    <li>Ut non enim metus.</li>

    </ul>
    </TextContent>
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
